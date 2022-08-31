import { useMutation } from "@apollo/client";
import { toast } from "react-toastify";

// containers
import SignUpForm from "../containers/AuthForms";

// helpers
import { DeepPartial } from "../../__types__/base.type";
import { SignUpDataInterface } from "../../__types__/containers/AuthForm.types";
import auth from "../../gql/auth";


function SignUpPage() {
  const [register] = useMutation(auth.REGISTER_MUTATION);

  const handleSubmit = (data: DeepPartial<SignUpDataInterface>) => {
    register({ variables: data }).catch(e => toast.error(e.message))
  }

  return <SignUpForm onSubmit={handleSubmit}/>;
}

export default SignUpPage;
