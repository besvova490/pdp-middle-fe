import { ApolloClient, InMemoryCache, NormalizedCacheObject } from "@apollo/client";
import { onError } from "apollo-link-error";
import { fromPromise, ApolloLink } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import Cookies from "universal-cookie";

// helpers
import auth from "./auth";


const httpLink = new HttpLink({ uri: process.env.REACT_APP_GQL_URL });
const cookies = new Cookies();

// eslint-disable-next-line init-declarations, prefer-const
let client: ApolloClient<NormalizedCacheObject>;

const getNewToken = async () => {
  const refreshToken = cookies.get("refreshToken");

  if (window.location.pathname.includes("/auth")) return;

  return client?.mutate({ mutation: auth.REFRESH_MUTATION, variables: { refreshToken } })
    .then(({ data }) => {
      // extract your accessToken from your response data and return it
      const { accessToken, refreshToken: refreshTokenNew } = data.refresh;

      cookies.set("accessToken", accessToken, { path: "/" });
      cookies.set("refreshToken", refreshTokenNew, { path: "/" });

      return accessToken;
    }).catch(() => {
      // Handle token refresh errors e.g clear stored tokens, redirect to login
      window.location.href = "/auth/login";

      cookies.remove("accessToken", { path: "/" });
      cookies.remove("refreshToken", { path: "/" });
    });
};

const errorLink = onError(
  ({ networkError, operation, forward }) => {
    if (networkError) {
      for (const err of (networkError as any).result.errors) {
        switch (err.extensions.code) {
          case "UNAUTHENTICATED":
            return fromPromise(getNewToken())
              .filter((value) => {
                return Boolean(value);
              })
              .flatMap((accessToken) => {
                const oldHeaders = operation.getContext().headers;
                // modify the operation context with a new token
                operation.setContext({
                  headers: {
                    ...oldHeaders,
                    authorization: `JWT ${accessToken}`,
                  },
                });

                // retry the request, returning the new observable
                return forward(operation);
              });
        }
      }
    }
  }
);

const authLink = new ApolloLink((operation, forward) => {
  // get the authentication token from local storage if it exists
  const accessToken = cookies.get("accessToken");
  // return the headers to the context so httpLink can read them

  if (accessToken) {
    operation.setContext({
      headers: {
        authorization: `JWT ${accessToken}`,
      },
    });
  }

  return forward(operation);
});

client = new ApolloClient({
  cache: new InMemoryCache({}),
  link: ApolloLink.from([errorLink, authLink, httpLink]) as any,
});


export default client;
