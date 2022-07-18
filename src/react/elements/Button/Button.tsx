import { Link } from "react-router-dom";

// components
import Preloader from "../../components/Preloader";

// helpers
import ButtonInterface from "../../../__types__/elements/Button.type";
import classNames from "../../../helpers/classNames";

// assets
import "../../../assets/styles/elements/button.scss";


function Button(props: ButtonInterface) {
  const {
    children,
    loading,
    disabled,
    size = "middle",
    icon,
    className = "",
    onClick,
    href,
    danger,
    success,
    secondary,
    shape = "default",
    type = "default",
    fullWidth,
    ...rest
  } = props;

  const buttonClassName = classNames(
    className,
    "pdp-chat-button",
    `pdp-chat-button_size-${size}`,
    `pdp-chat-button_type-${type}`,
    `pdp-chat-button_shape-${shape}`,
    {
      "pdp-chat-button_disabled": !!disabled,
      "pdp-chat-button_type-danger": !!danger,
      "pdp-chat-button_type-success": !!success,
      "pdp-chat-button_type-secondary": !!secondary,
      "pdp-chat-button_full-width": !!fullWidth,
    }
  );

  const renderButtonContent = () => (<>
    { !loading && icon ? icon : null }
    { loading
      ? <Preloader
        success={type !== "default" && success}
        danger={type !== "default" && danger}
        secondary={type !== "default" && secondary}
        primary={type !== "default"}
      />
      : null
    }
    {
      children
        ? (
          <div>
            { children }
          </div>
        )
        : null
    }
  </>);


  if (href) {
    return (
      <Link
        to={href}
        className={buttonClassName}
        onClick={e => !disabled && onClick && onClick(e)}
      >
        { renderButtonContent() }
      </Link>
    );
  }

  return (
    <button
      { ...rest }
      className={buttonClassName}
      onClick={e => !disabled && onClick && onClick(e)}
    >
      { renderButtonContent() }
    </button>
  );
}

export default Button;
