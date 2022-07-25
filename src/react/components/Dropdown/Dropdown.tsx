import { useState, useEffect, useRef } from "react";
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
    className = "",
    placement,
    ...rest
  } = props;

  const [isMenuVisible, setIsMenuVisible] = useState(!!visible || !!defaultVisible);
  const [position, setPosition] = useState<PositionOfElement | null>(null);

  const ref = useRef<HTMLUListElement | null>(null);


  useEffect(() => {
    if (typeof visible !== "undefined") {
      setIsMenuVisible(visible);
    }
  }, [visible]);

  const handleToggleVisible = (e: boolean) => {
    setIsMenuVisible(e);
  }

  const getPlacement = () => {
    if (!position) return {};

    const optionsHeight = ref.current?.getBoundingClientRect().height || 0;
    const optionsWidth = ref.current?.getBoundingClientRect().width || 0;

    switch (placement) {
      case "top":
        return { top: `${position.top - optionsHeight}px`, left: `${((position.left + (position.width / 2)) - (optionsWidth / 2))}px` };
      case "topLeft":
        return { top: `${position.top - optionsHeight}px`, left: `${position.left}px` };
      case "topRight":
        return { top: `${position.top - optionsHeight}px`, right: `calc(100% - ${position.right}px)` };
      case "bottom":
        return { top: `${position.top + position.height}px`, left: `${((position.left + (position.width / 2)) - (optionsWidth / 2))}px` };
      case "bottomLeft":
        return { top: `${position.top + position.height}px`, left: `${position.left}px` };
      case "bottomRight":
        return { top: `${position.top + position.height}px`, right: `calc(100% - ${position.right}px)` };
      default:
        return { top: `${position.bottom}px`, left: `${position.left}px` };
    }
  }
  

  return (
    <div
      { ...rest }
      ref={el => !position && el && setPosition(el.getBoundingClientRect())}
      onMouseOver={() => handleToggleVisible(true)}
      onMouseLeave={() => handleToggleVisible(false)}
      className={`pdp-chat-dropdown ${className}`}
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
        style={getPlacement()}
      >
        <AnimatedHeight visible={isMenuVisible}>
          <ul className="pdp-chat-dropdown__menu-list" ref={ref}>
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

