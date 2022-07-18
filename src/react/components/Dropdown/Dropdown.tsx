import { useState, useRef, useEffect } from "react";

// components
import AnimatedHeight from "../AnimatedHeight";
import RenderInPortal from "../RenderInPortal";

// helpers
import DropdownInterface from "../../../__types__/components/Dropdown.type";

// assets
import "../../../assets/styles/components/dropdown.scss";


function Dropdown({ visible, children, options = [], defaultVisible, ...props }: DropdownInterface) {
  const [isMenuVisible, setIsMenuVisible] = useState(!!visible || !!defaultVisible);

  const ref = useRef<HTMLDivElement>(null);
  const position = ref.current ? ref.current.getBoundingClientRect() : null;

  useEffect(() => {
    if (typeof visible !== "undefined") {
      setIsMenuVisible(visible);
    }
  }, [visible]);

  const handleToggleVisible = (e: boolean) => {
    setIsMenuVisible(e);
  }
  

  return (
    <div
      { ...props }
      ref={ref}
      onMouseOver={() => handleToggleVisible(true)}
      onMouseLeave={() => handleToggleVisible(false)}
      className="pdp-chat-dropdown"
    >
      { children }
      <RenderInPortal
        className="pdp-chat-dropdown__menu"
        style={position
          ? { top: `${position.bottom + 2}px`, left: `${position.left}px` }
          : {}
        }
      >
        <AnimatedHeight visible={isMenuVisible}>
          <ul className="pdp-chat-dropdown__menu-list">
            { options.map((item, index) => (
              <li
                className="pdp-chat-dropdown__menu-list-item"
                key={`${index} - ${item.label}`}
              >
                { item.label }
              </li>
            )) }
          </ul>
        </AnimatedHeight>
      </RenderInPortal>
    </div>
  );
}

export default Dropdown;

