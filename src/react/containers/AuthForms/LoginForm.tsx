import { Link } from "react-router-dom";
import { useForm, FieldErrorsImpl } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// components
import AuthFormCard from "./AuthFormCard";

// elements
import Input, { PasswordInput } from "../../elements/Input";
import Button from "../../elements/Button";

// helpers
import { loginAuthSchema } from "../../../helpers/validationSchemas";
import { LoginFormDataInterface } from "../../../__types__/containers/AuthForm.types";
import { BaseFormInterface } from "../../../__types__/base.type";

// assets
import Logo from "../../icons/Logo";


function LoginForm({ onSubmit, onError }: BaseFormInterface<LoginFormDataInterface>) {

  const { handleSubmit, watch, setValue, formState: { errors } } = useForm<LoginFormDataInterface>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginAuthSchema),
  });

  const { email, password } = watch();

  const handleSubmitEvent = (data: LoginFormDataInterface) => {
    onSubmit && onSubmit(data);
  }

  const handleError = (data: FieldErrorsImpl<LoginFormDataInterface>) => {
    onError && onError(data)
  }

  
  return (
    <AuthFormCard
      icon={<Logo/>}
      title="Log in to your account"
      footer={<span className="pdp-chat-auth-form__footer-message">Dont have an account? <Link to="/sign-up">Sign up</Link></span>}
    >
      <form
        className="pdp-chat-auth-form"
        onSubmit={handleSubmit(handleSubmitEvent, handleError)}
      >
        <Input
          fullWidth
          label="Username or email"
          value={email}
          name="email"
          onChange={e => setValue("email", e.target.value)}
          error={errors.email?.message}
        />
        <PasswordInput
          fullWidth
          label="Password"
          value={password}
          name="password"
          onChange={e => setValue("password", e.target.value)}
          error={errors.password?.message}
        />
        <Button htmlType="submit" fullWidth>
          Log In
        </Button>
      </form>
    </AuthFormCard>
  );
}

export default LoginForm;
