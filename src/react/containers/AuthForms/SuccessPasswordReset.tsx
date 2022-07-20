// components
import AuthFormCard from "./AuthFormCard";

// elements
import Button from "../../elements/Button";

// icons
import SuccessRestPasswordIcon from "../../icons/SuccessRestPasswordIcon";


function SuccessPasswordReset() {

  
  return (
    <AuthFormCard
      title="Password successfully updated"
    >
      <div className="pdp-chat-auth-form">
        <div className="pdp-chat-auth-form__success-block">
          <SuccessRestPasswordIcon/>
        </div>
        <Button href="/login" fullWidth>
          Back to Login
        </Button>
      </div>
    </AuthFormCard>
  );
}

export default SuccessPasswordReset;
