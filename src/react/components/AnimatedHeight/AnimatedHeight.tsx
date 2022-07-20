import { useRef, useState, useEffect } from "react";

// helpers
import classNames from "../../../helpers/classNames";
import AnimatedHeightInterface from "../../../__types__/components/AnimatedHeight.type";

// assets
import "../../../assets/styles/components/animated-height.scss";


function AnimatedHeight(props: AnimatedHeightInterface) {
  const {
    children,
    visible,
    className = "",
    transitionDuration = 200,
    initialHeight = "0px",
    ...rest
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(initialHeight);
  
  const ref = useRef<HTMLDivElement>(null);
  const elementHeight = ref.current ? ref.current.scrollHeight : 0;

  useEffect(() => {
    if (typeof visible !== "undefined") {
      setIsOpen(visible);
    }
  }, [visible]);
  
  useEffect(() => {
    if (!ref.current) return;

    if (isOpen && height !== "auto") {
      return setHeight(`${elementHeight}px`);
    }

    if (!isOpen && height === "auto") {
      setHeight(`${elementHeight}px`);
    } else if (!isOpen && height === `${elementHeight}px`) {
      setHeight(initialHeight);
    }
  }, [isOpen, height]);


  const handleTransitionEnd = () => {
    if (isOpen && height !== initialHeight) {
      setHeight("auto");
    }
  }

  const animatedHeightClassNames = classNames(
    "pdp-chat-animated-height",
    className,
    {
      "pdp-chat-animated-height_open": height === "auto",
    },
  );


  return (
    <div
      { ...rest }
      ref={ref}
      style={{ height: height, transitionDuration: `${transitionDuration}ms` }}
      onTransitionEnd={handleTransitionEnd}
      className={animatedHeightClassNames}
    >
      { children }
    </div>
  );
}

export default AnimatedHeight;
