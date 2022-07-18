import React, { useState, useEffect, ForwardedRef } from "react";
import { BsCheckLg } from "react-icons/bs";

// helpers
import CheckboxInterface from "../../../__types__/elements/Checkbox.type";
import classNames from "../../../helpers/classNames";

// assets
import "../../../assets/styles/elements/checkbox.scss";


const Checkbox = React.forwardRef<HTMLElement, CheckboxInterface>(
  (props: CheckboxInterface, ref: ForwardedRef<HTMLElement>) => {
    const {
      label,
      children,
      name,
      checked,
      defaultChecked,
      disabled,
      className = "",
      onChange,
      error,
      ...rest
    } = props;
    
    const [isChecked, setIsChecked] = useState(!!defaultChecked);
  
    useEffect(() => {
      if (typeof checked === "undefined") return;
  
      setIsChecked(!!checked);
    }, [checked]);
  
    const checkboxClassNames = classNames(
      "pdp-chat-checkbox",
      className,
      {
        "pdp-chat-checkbox_with-error": !!error,
        "pdp-chat-checkbox_checked": isChecked,
        "pdp-chat-checkbox_disabled": !!disabled,
      }
    );
  
    const handleChange = () => {
      if (disabled) return;
  
      setIsChecked(!isChecked);
      onChange && onChange(!isChecked, name);
    }
  
    return (
      <span { ...rest } ref={ref} className={checkboxClassNames}>
        <input
          type="checkbox"
          className="pdp-chat-checkbox__tag"
          name={name}
          disabled={disabled}
          checked={isChecked}
        />
        <span className="pdp-chat-checkbox__inner" onClick={handleChange}>
          <BsCheckLg className="pdp-chat-checkbox__inner-icon"/>
        </span>
        { label || children
          ? <span className="pdp-chat-checkbox__label" onClick={handleChange}>{ label || children }</span>
          : null
        }
        { error ? <span className="pdp-chat-checkbox__error">{ error }</span> : null }
      </span>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
