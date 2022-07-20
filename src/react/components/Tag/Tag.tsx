import { CgClose } from "react-icons/cg";

// helpers
import classNames from "../../../helpers/classNames";
import TagInterface from "../../../__types__/components/Tag.type";

// assets
import "../../../assets/styles/components/tag.scss";


function Tag(props: TagInterface) {
  const {
    children,
    label,
    closable,
    closeIcon,
    onClose,
    className = "",
    disabled,
    secondary,
    success,
    danger,
    primary,
    ...rest
  } = props;

  const tagClassNames = classNames(
    "pdp-chat-tag",
    className,
    {
      "pdp-chat-tag_disabled": !!disabled,
      "pdp-chat-tag_type-secondary": !!secondary,
      "pdp-chat-tag_type-success": !!success,
      "pdp-chat-tag_type-danger": !!danger,
      "pdp-chat-tag_type-primary": !!primary,
    }
  );

  return (
    <span
      { ...rest }
      className={tagClassNames}
      onClick={() => !disabled && onClose && onClose()}
    >
      { children || label }
      {
        closable
          ? <span className="pdp-chat-tag__close-icon">
            { closeIcon || <CgClose/> }
          </span>
          : null
      }
    </span>
  );
}

export default Tag;
