import { useRef } from "react";

// components
import RenderInPortal from "../RenderInPortal";

// helpers
import useClickOutside from "../../../hooks/useClickOutside";
import classNames from "../../../helpers/classNames";
import DrawerInterface from "../../../__types__/components/Drawer.types";

// assets
import "../../../assets/styles/components/drawer.scss";


function Drawer({ visible, onClose, children }: DrawerInterface) {
  const ref = useRef<HTMLDivElement | null>(null)

  useClickOutside(ref, () => onClose && onClose());

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
          { children }
        </div>
      </div>
    </RenderInPortal>
  );
}

export default Drawer;
