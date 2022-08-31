// layout
import GeneralLayout from "../../layouts/GeneralLayout";

// context
import UserContextProvider from "../../../context/UserProfileContext";

// helpers
import BaseRouteInterface from "../../../__types__/router.type";


function PrivateRoute({ element: Element, ...rest }: BaseRouteInterface) {


  return (
    <UserContextProvider>
      <GeneralLayout>
        <Element { ...rest }/>
      </GeneralLayout>
    </UserContextProvider>
  );
}

export default PrivateRoute;
