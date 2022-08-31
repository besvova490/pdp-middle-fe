import React from "react";

// components
import Sidebar from "./components/Sidebar";

// helpers
import getChildren from "../../../helpers/getChildren";

// assets
import "../../../assets/styles/layouts/layout-with-side-bar.scss"


function ListWithSidebar({ children }: { children: React.ReactNode }) {
  const [sidebar, otherChildren] = getChildren({ children, specificChildType: Sidebar.name });


  return (
    <div className="pdp-chat-layout-with-side-bar">
      <div className="pdp-chat-layout-with-side-bar__main-content">
        { otherChildren }
      </div>
      <div className="pdp-chat-layout-with-side-bar__side-bar">
        { sidebar }
      </div>
    </div>
  );
}

ListWithSidebar.Sidebar = Sidebar;

export default ListWithSidebar;
