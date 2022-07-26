import { useForm, FieldErrorsImpl } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// components
import AuthFormCard from "./components/AuthFormCard";

// elements
import { PasswordInput } from "../../elements/Input";
import Button from "../../elements/Button";

// helpers
import { restorePassword } from "../../../helpers/validationSchemas";
import { RestorePasswordInterface } from "../../../__types__/containers/AuthForm.types";
import { BaseFormInterface } from "../../../__types__/base.type";

// assets
import "../../../assets/styles/container/auth-form.scss";


function PasswordRestore({ onSubmit, onError }: BaseFormInterface<RestorePasswordInterface>) {

  const { handleSubmit, watch, setValue, formState: { errors } } = useForm<RestorePasswordInterface>({
    defaultValues: {
      password: "", passwordConfirmation: ""
    },
    resolver: yupResolver(restorePassword),
  });

  const { password, passwordConfirmation } = watch();

  const handleSubmitEvent = (data: RestorePasswordInterface) => {
    onSubmit && onSubmit(data);
  }

  const handleError = (data: FieldErrorsImpl<RestorePasswordInterface>) => {
    onError && onError(data)
  }

  
  return (
    <AuthFormCard
      title="Password restore"
      subtitle="Please enter your password and confirmation"
    >
      <form
        className="pdp-chat-auth-form"
        onSubmit={handleSubmit(handleSubmitEvent, handleError)}
      >
        <PasswordInput
          fullWidth
          label="New password"
          value={password}
          name="password"
          onChange={e => setValue("password", e.target.value)}
          error={errors.password?.message}
        />
        <PasswordInput
          fullWidth
          label="Confirm password"
          value={passwordConfirmation}
          name="passwordConfirmation"
          onChange={e => setValue("passwordConfirmation", e.target.value)}
          error={errors.passwordConfirmation?.message}
        />
        <Button htmlType="submit" fullWidth>
          Restore
        </Button>
        <Button href="/login" isDefault fullWidth>
          Back to Login
        </Button>
      </form>
    </AuthFormCard>
  );
}

export default PasswordRestore;
