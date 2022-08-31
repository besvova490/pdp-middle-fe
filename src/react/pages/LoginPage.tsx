import { toast } from "react-toastify";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

// containers
import LoginForm from "../containers/AuthForms/LoginForm";

// helpers
import { DeepPartial } from "../../__types__/base.type";
import { SignUpDataInterface } from "../../__types__/containers/AuthForm.types";
import auth from "../../gql/auth";


const cookies = new Cookies();

function LoginPage() {
  const [login] = useMutation(auth.LOGIN_MUTATION);

  const history = useNavigate();

  const handleSubmit = (data: DeepPartial<SignUpDataInterface>) => {
    login({ variables: data })
      .then((resp) => {
        const { accessToken, refreshToken } = resp.data.login;

        cookies.set("accessToken", accessToken, { path: "/" });
        cookies.set("refreshToken", refreshToken, { path: "/" });
        history("/");
      })
      .catch(e => toast.error(e.message))
  }

  return (<LoginForm onSubmit={handleSubmit}/>);
}

export default LoginPage;
