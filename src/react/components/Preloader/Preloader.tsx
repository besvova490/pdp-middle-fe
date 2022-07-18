// helpers
import classNames from "../../../helpers/classNames";
import PreloaderInterface from "../../../__types__/components/Preloader.type";

// assets
import "../../../assets/styles/components/preloader.scss";


function Preloader(props: PreloaderInterface) {
  const { className = "", size = "small", primary, danger, success, secondary, ...rest } = props;

  const preloaderClassNames = classNames(
    className,
    "pdp-chat-preloader",
    `pdp-chat-preloader_size-${size}`,
    {
      "pdp-chat-preloader_type-primary": !!primary,
      "pdp-chat-preloader_type-danger": !!danger,
      "pdp-chat-preloader_type-success": !!success,
      "pdp-chat-preloader_type-secondary": !!secondary,
    }
  );

  return (
    <div { ...rest } className={preloaderClassNames}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Preloader;
