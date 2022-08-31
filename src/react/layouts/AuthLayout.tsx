import React from "react";

// containers
import BaseHeader from "../containers/Header/components/BaseHeader";

// components
import LoginBackground from "../icons/LoginBackground";

// styles
import "../../assets/styles/layouts/auth-layout.scss";


function AuthLayout({ children }: { children: React.ReactNode }) {

  return (
    <div className="pdp-chat-page">
      <BaseHeader/>
      <div className="pdp-chat-page__content pdp-chat-auth-page">
        <div className="pdp-chat-auth-page__background">
          <LoginBackground className="pdp-chat-auth-page__background-icon"/>
        </div>
        { children }
      </div>
    </div>
  );
}
export default AuthLayout;
