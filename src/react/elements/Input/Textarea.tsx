import React, { useState, useEffect, ForwardedRef } from "react";

// helpers
import { TextareaInterface } from "../../../__types__/elements/Input.type";
import classNames from "../../../helpers/classNames";

// assets
import "../../../assets/styles/elements/input.scss";


const Textarea = React.forwardRef<HTMLElement, TextareaInterface>(
  (props: TextareaInterface, ref: ForwardedRef<HTMLElement>) => {
    const {
      className = "",
      label,
      error,
      disabled,
      showCount,
      maxLength,
      defaultValue = "",
      value,
      onChange,
      fullWidth,
      ...rest
    } = props;

    const [inputValue, setInputValue] = useState(defaultValue);

    useEffect(() => {
      if (typeof value === "undefined") return;

      setInputValue(value || "");
    }, [value]);


    const inputClassNames = classNames(
      "pdp-chat-input",
      className,
      {
        "pdp-chat-input_disabled": !!disabled,
        "pdp-chat-input_with-error": !!error,
        "pdp-chat-input_full-width": !!fullWidth,
      }
    );

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (disabled) return;

      setInputValue(e.target.value);
      onChange && onChange(e);
    }


    return (
      <span className={inputClassNames} ref={ref}>
        { label ? <span className="pdp-chat-input__label">{ label }</span> : null }
        <span className="pdp-chat-input__tag-wrapper">
          <textarea
            { ...rest }
            onChange={handleChange}
            defaultValue={defaultValue}
            value={inputValue}
            disabled={disabled}
            className="pdp-chat-input__tag pdp-chat-input__tag-textarea"
          />
        </span>
        { error || showCount
          ? <span className="pdp-chat-input__footer">
            { error ? <span className="pdp-chat-input__error">{ error }</span> : null }
            {
              showCount
                ? <span className="pdp-chat-input__counter">
                  { inputValue.length }
                  { maxLength ? `/${maxLength}` : null }
                </span>
                : null
            }
          </span>
          : null
        }
      </span>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
