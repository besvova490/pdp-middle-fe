import { useRef, useEffect, useCallback } from "react";

// components
import RenderInPortal from "../RenderInPortal";

// helpers
import useClickOutside from "../../../hooks/useClickOutside";
import classNames from "../../../helpers/classNames";
import DrawerInterface from "../../../__types__/components/Drawer.types";

// assets
import "../../../assets/styles/components/drawer.scss";


function Drawer({ visible, onClose, children, closable = true }: DrawerInterface) {
  const ref = useRef<HTMLDivElement | null>(null);

  const closeCallback = useCallback(() => {
    console
    if (closable && onClose) onClose()
  }, [closable, onClose]);

  useClickOutside(ref, closeCallback);

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [visible]);

  const drawerClassName = classNames(
    "pdp-chat-drawer",
    {
      "pdp-chat-drawer__open": !!visible,
    }
  );

  return (
    <RenderInPortal style={{ position: "absolute" }}>
      <div className={drawerClassName} tabIndex={visible ? 0 : -1}>
        <div className="pdp-chat-drawer__content" ref={ref}>
          { visible ? children : null }
        </div>
      </div>
    </RenderInPortal>
  );
}

export default Drawer;
