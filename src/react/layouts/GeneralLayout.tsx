import React from "react";

// containers
import Header from "../containers/Header";


function GeneralLayout({ children }: { children: React.ReactNode }) {

  return (
    <div className="pdp-chat-page">
      <Header/>
      <div className="pdp-chat-page__content">
        { children }
      </div>
    </div>
  );
}

export default GeneralLayout;
