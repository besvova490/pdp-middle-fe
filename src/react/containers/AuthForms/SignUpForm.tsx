import { Link } from "react-router-dom";
import { useForm, FieldErrorsImpl } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// elements
import Input, { PasswordInput } from "../../elements/Input";
import Button from "../../elements/Button";

// components
import AuthFormCard from "./components/AuthFormCard";

// helpers
import { signUpAuthSchema } from "../../../helpers/validationSchemas";
import { SignUpDataInterface } from "../../../__types__/containers/AuthForm.types";
import { BaseFormInterface } from "../../../__types__/base.type";

// assets
import Logo from "../../icons/Logo";


function AuthForm({ onSubmit, onError }: BaseFormInterface<SignUpDataInterface>) {

  const { handleSubmit, watch, setValue, formState: { errors } } = useForm<SignUpDataInterface>({
    defaultValues: {
      email: "",
      password: "",
      passwordConfirmation: "",
    },
    resolver: yupResolver(signUpAuthSchema),
  });

  const { email, password, passwordConfirmation } = watch();

  const handleSubmitEvent = (data: SignUpDataInterface) => {
    onSubmit && onSubmit(data);
  }

  const handleError = (data: FieldErrorsImpl<SignUpDataInterface>) => {
    onError && onError(data)
  }

  
  return (
    <AuthFormCard
      icon={<Logo/>}
      title="Sign up"
      footer={<span className="pdp-chat-auth-form__footer-message">Already a member? <Link to="/login">Log In</Link></span>}
    >
      <form className="pdp-chat-auth-form" onSubmit={handleSubmit(handleSubmitEvent, handleError)}>
        <Input
          fullWidth
          label="Email"
          name="email"
          value={email}
          onChange={e => setValue("email", e.target.value)}
          error={errors.email?.message}
        />
        <PasswordInput
          fullWidth
          label="Password"
          name="password"
          value={password}
          onChange={e => setValue("password", e.target.value)}
          error={errors.password?.message}
        />
        <PasswordInput
          fullWidth
          label="Confirm Password"
          name="passwordConfirmation"
          value={passwordConfirmation}
          onChange={e => setValue("passwordConfirmation", e.target.value)}
          error={errors.passwordConfirmation?.message}
        />
        <Button htmlType="submit" fullWidth>Sign up</Button>
      </form>
      <p className="pdp-chat-auth-form__info-text">
        By signing up for RoadStr, you agree to the <Link to="/">Terms of Service</Link>.
        View our <Link to="/">Privacy Policy</Link>.
      </p>
    </AuthFormCard>
  );
}

export default AuthForm;
