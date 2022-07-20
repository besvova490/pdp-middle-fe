import React from "react";


function ElementsList({ children, isRow }: { children: React.ReactNode | Array<React.ReactNode>, isRow?: boolean }) {


  return (
    <div className={`storybook-list ${isRow ? "" : "storybook-list_column"}`}>
      { children }
    </div>
  );
}

export default ElementsList;
