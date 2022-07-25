import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

// components
import SignUpFormComponent, {
  AuthFormCard as AuthFormCardComponent,
  LoginForm as LoginFormComponent,
  ResetPassword as ResetPasswordComponent,
  PasswordRestore as PasswordRestoreComponent,
  SuccessPasswordReset as SuccessPasswordResetComponent,
} from "../../react/containers/AuthForms";

// assets
import Logo from "../../react/icons/Logo";


const Template: ComponentStory<typeof SignUpFormComponent> = () => (
  <SignUpFormComponent
    onSubmit={action("onSubmit")}
    onError={action("onError")}
  />
);

const TemplateLogin: ComponentStory<typeof LoginFormComponent> = () => (
  <LoginFormComponent
    onSubmit={action("onSubmit")}
    onError={action("onError")}
  />
);

const TemplateReset: ComponentStory<typeof ResetPasswordComponent> = () => (
  <ResetPasswordComponent
    onSubmit={action("onSubmit")}
    onError={action("onError")}
  />
);

const TemplateRestore: ComponentStory<typeof PasswordRestoreComponent> = () => (
  <PasswordRestoreComponent
    onSubmit={action("onSubmit")}
    onError={action("onError")}
  />
);

const TemplateSuccessMessage: ComponentStory<typeof SuccessPasswordResetComponent> = () => (
  <SuccessPasswordResetComponent/>
);

const TemplateCard: ComponentStory<typeof AuthFormCardComponent> = args => <AuthFormCardComponent { ...args }/>;

export const SignUp = Template.bind({});
SignUp.args = {};

export const Login = TemplateLogin.bind({});
Login.args = {};

export const ResetPassword = TemplateReset.bind({});
ResetPassword.args = {};

export const PasswordRestore = TemplateRestore.bind({});
PasswordRestore.args = {};

export const SuccessPasswordReset = TemplateSuccessMessage.bind({});

export const AuthFormCard = TemplateCard.bind({});
AuthFormCard.args = {
  icon: <Logo/>,
  title: "Sign up",
  footer: "Already a member? Log In",
  children: "Please check your inbox to confirm your email address before logging in. If you misspelled your email address, please repeat the registration process.",
};

export default {
  title: "Containers/Auth Forms",
  component: SignUpFormComponent,
} as ComponentMeta<typeof SignUpFormComponent>;
