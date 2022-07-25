import { useForm, FieldErrorsImpl } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// components
import AuthFormCard from "./AuthFormCard";

// elements
import Input from "../../elements/Input";
import Button from "../../elements/Button";

// helpers
import { emailValidation } from "../../../helpers/validationSchemas";
import { ResetFormDataInterface } from "../../../__types__/containers/AuthForm.types";
import { BaseFormInterface } from "../../../__types__/base.type";

const validation = yup.object({
  email: emailValidation,
});

function ResetPassword({ onSubmit, onError }: BaseFormInterface<ResetFormDataInterface>) {

  const { handleSubmit, watch, setValue, formState: { errors } } = useForm<ResetFormDataInterface>({
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(validation),
  });

  const { email } = watch();

  const handleSubmitEvent = (data: ResetFormDataInterface) => {
    onSubmit && onSubmit(data);
  }

  const handleError = (data: FieldErrorsImpl<ResetFormDataInterface>) => {
    onError && onError(data)
  }

  
  return (
    <AuthFormCard
      title="Reset password"
      subtitle="Please enter the email associated with your account to recover your username and password"
    >
      <form
        className="pdp-chat-auth-form"
        onSubmit={handleSubmit(handleSubmitEvent, handleError)}
      >
        <Input
          fullWidth
          label="Email"
          value={email}
          name="email"
          onChange={e => setValue("email", e.target.value)}
          error={errors.email?.message}
        />
        <Button htmlType="submit" fullWidth>
          Recover
        </Button>
        <Button href="/login" isDefault fullWidth>
          Back to Login
        </Button>
      </form>
    </AuthFormCard>
  );
}

export default ResetPassword;
