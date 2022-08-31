import { createContext, ReactNode, useContext } from "react";
import { useQuery } from "@apollo/client";

//helpers
import { EditUserProfileInterface } from "../__types__/containers/EditUserProfile.types";
import profile from "../gql/profile";


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

  const { loading, data } = useQuery(profile.PROFILE_QUERY);

  const { profile: userProfile } = data || {};

  return (
    <UserContext.Provider value={{ user: userProfile, loading: loading }}>
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
