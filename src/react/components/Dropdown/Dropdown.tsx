import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

// components
import AnimatedHeight from "../AnimatedHeight";
import RenderInPortal from "../RenderInPortal";

// helpers
import DropdownInterface from "../../../__types__/components/Dropdown.type";

// assets
import "../../../assets/styles/components/dropdown.scss";

type PositionOfElement = {
  bottom: number;
  height: number;
  left: number;
  right: number;
  top: number;
  width: number;
  x: number;
  y: number;
}


function Dropdown(props: DropdownInterface) {
  const {
    visible,
    children,
    options = [],
    defaultVisible,
    arrow = true,
    renderArrow,
    ...rest
  } = props;

  const [isMenuVisible, setIsMenuVisible] = useState(!!visible || !!defaultVisible);
  const [position, setPosition] = useState<PositionOfElement | null>(null);


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
      { ...rest }
      ref={el => !position && el && setPosition(el.getBoundingClientRect())}
      onMouseOver={() => handleToggleVisible(true)}
      onMouseLeave={() => handleToggleVisible(false)}
      className="pdp-chat-dropdown"
    >
      { children }
      {
        arrow && !renderArrow
          ? <span className="pdp-chat-dropdown__arrow-icon"><FaChevronDown/></span>
          : null
      }
      {
        renderArrow ? renderArrow(!!visible) : null
      }
      <RenderInPortal
        key={JSON.stringify(position)}
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

