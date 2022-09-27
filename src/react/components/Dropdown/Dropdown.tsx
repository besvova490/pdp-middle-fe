import { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import isEqual from "lodash/isEqual";
import { Link } from "react-router-dom";

// components
import AnimatedHeight from "../AnimatedHeight";
import RenderInPortal from "../RenderInPortal";

// helpers
import DropdownInterface, { DropdownOptionInterface } from "../../../__types__/components/Dropdown.type";

// assets
import "../../../assets/styles/components/dropdown.scss";


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

  const ref = useRef<HTMLUListElement | null>(null);
  const refPosition = useRef<DOMRect | null>(null);

  useEffect(() => {
    if (typeof visible !== "undefined") {
      setIsMenuVisible(visible);
    }
  }, [visible]);

  const handleToggleVisible = (e: boolean) => {
    setIsMenuVisible(e);
  }

  const setRootPosition = (el: HTMLDivElement | null) => {
    const elementPosition = el ? el.getBoundingClientRect() : {};

    if (el && !isEqual(refPosition.current, elementPosition)) {
      refPosition.current = elementPosition as DOMRect;
    }
  }

  const getPlacement = () => {
    if (!refPosition.current) return {};

    const position = refPosition.current;
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

  const onSingleItemClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, item: DropdownOptionInterface) => {
    // setIsMenuVisible(false);
                    
    if (item.onClick) {
      e.preventDefault();
      item.onClick();
    }
  }
  

  return (
    <div
      { ...rest }
      ref={setRootPosition}
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
        key={JSON.stringify(refPosition.current)}
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
                <Link
                  to={item.href || "#"}
                  onClick={e => onSingleItemClick(e, item)}
                >
                  { item.label }
                </Link>
              </li>
            )) }
          </ul>
        </AnimatedHeight>
      </RenderInPortal>
    </div>
  );
}

export default Dropdown;

