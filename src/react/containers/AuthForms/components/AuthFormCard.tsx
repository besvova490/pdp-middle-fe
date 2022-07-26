// helpers
import classNames from "../../../../helpers/classNames";
import { AuthFormCardInterface } from "../../../../__types__/containers/AuthForm.types";

// assets
import "../../../../assets/styles/container/auth-form.scss";

function AuthFormCard({ className = "", children, icon, title, footer, subtitle, ...rest }: AuthFormCardInterface) {

  const authFormCardClassNames = classNames(
    "pdp-chat-auth-card",
    className
  );
  

  return (
    <section
      { ...rest }
      className={authFormCardClassNames}
    >
      {
        icon || title || subtitle
          ? (
            <div className="pdp-chat-auth-card__header">
              { icon ? <div className="pdp-chat-auth-card__header-icon">{ icon }</div> : null }
              { title ? <div className="pdp-chat-auth-card__header-title">{ title }</div> : null }
              { subtitle ? <div className="pdp-chat-auth-card__header-subtitle">{ subtitle }</div> : null }
            </div>
          )
          : null
      }
      <div className="pdp-chat-auth-card__body">
        { children }
      </div>
      {
        footer
          ? <div className="pdp-chat-auth-card__footer">{ footer }</div>
          : null
      }
    </section>
  );
}

export default AuthFormCard;
