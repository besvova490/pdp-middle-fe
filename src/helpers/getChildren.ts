import { Children, isValidElement } from "react";

// helpers
import GetChildrenInterface from "../__types__/helpers.type";

function getChildren({ children, specificChildType }: GetChildrenInterface) {
  const otherChildren: Array<React.ReactNode> = [];
  const specificChildren: Array<React.ReactNode> = [];

  Children.forEach(children, (child) => {
    if (isValidElement(child) && (child.type as React.FunctionComponent).name === specificChildType) {
      specificChildren.push(child);
    } else {
      otherChildren.push(child);
    }
  });

  return [specificChildren, otherChildren];
}

export default getChildren;
