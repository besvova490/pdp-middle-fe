// layout
import AuthLayout from "../../layouts/AuthLayout";

// helpers
import BaseRouteInterface from "../../../__types__/router.type";


function AuthRoute({ element: Element, ...rest }: BaseRouteInterface) {


  return (
    <AuthLayout>
      <Element { ...rest }/>
    </AuthLayout>
  );
}

export default AuthRoute;
