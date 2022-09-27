import { createContext, ReactNode, useContext, useLayoutEffect, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";

//helpers
import { EditUserProfileInterface } from "../__types__/containers/EditUserProfile.types";
import profile from "../gql/profile";
import socketClient from "../socket";
import { SOCKET_SESSION_STARTED } from "../socket/socketEvents";


export type IUserProfileContext = {
  user: EditUserProfileInterface | null;
  loading: boolean;
};

export interface IUserContextProps {
  user?: EditUserProfileInterface;
  children?: ReactNode;
}

//context
//eslint-disable-next-line
export const UserContext = createContext<IUserProfileContext>({ user: null, loading: false });


// provider
const UserContextProvider = ({ children }: IUserContextProps): JSX.Element => {

  const [fetchProfile, { loading, data }] = useLazyQuery<{ profile: EditUserProfileInterface }>(profile.PROFILE_QUERY);

  const { profile: userProfile } = data || {};

  useLayoutEffect(() => {
    fetchProfile().then(resp => {
      const sessionId = localStorage.getItem("socketSession");

      if (sessionId) {
        socketClient.auth = { sessionId, userId: resp.data?.profile.id, name: resp.data?.profile.userName };
        socketClient.connect();
      } else {
        socketClient.auth = { name: resp.data?.profile.userName, userId: resp.data?.profile.id };
        socketClient.connect();
      }
    })
  }, []);

  useEffect(() => {
    socketClient.on(SOCKET_SESSION_STARTED, ({ sessionId, userId }) => {
      socketClient.auth = { sessionId };
      localStorage.setItem("socketSession", sessionId);
      socketClient.userId = userId;
    });
  }, [socketClient]);

  return (
    <UserContext.Provider value={{ user: userProfile as EditUserProfileInterface, loading: loading }}>
      {children}
    </UserContext.Provider>
  );
};


//hook
export const useUserProfile = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw Error("useUserProfileContext should br used within a UserContextProvider");
  }

  return context;
}

export default UserContextProvider;
