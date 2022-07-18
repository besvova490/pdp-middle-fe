import { useLayoutEffect, useEffect, useState } from "react";
import { createPortal } from "react-dom";

// helpers
import RenderInPortalInterface from "../../__types__/components/RenderInPortal.type";


function RenderInPortal({ children, className = "", style = {} }: RenderInPortalInterface) {
  const [elements] = useState(() => {
    const wrapperElement = document.createElement("div");
    wrapperElement.classList.add(className);

    return {
      el: wrapperElement,
      parent: document.getElementById("root"),
    };
  });

  const { el, parent } = elements;


  useLayoutEffect(() => {
    parent && el && parent.after(el);
  }, []);

  useEffect(() => {
    if (el) {
      Object.keys(style).forEach(item => {
        el.style[item as any] = `${style[item as keyof typeof style]}`;
      });
    }
  }, [style]);

  useEffect(() => () => {
    document.body.removeChild(el);
  }, []);


  return createPortal(
    children,
    el,
  );
}

export default RenderInPortal;
