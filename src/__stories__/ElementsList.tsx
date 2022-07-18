import React from "react";


function ElementsList({ children }: { children: React.ReactNode | Array<React.ReactNode> }) {


  return (
    <div className="storybook-list storybook-list_column">
      { children }
    </div>
  );
}

export default ElementsList;
