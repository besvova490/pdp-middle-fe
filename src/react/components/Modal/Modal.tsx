import { useState, useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

//component
import RenderInPortal from "../RenderInPortal";

// helpers
import classNames from "../../../helpers/classNames";
import ModalInterface from "../../../__types__/components/Modal.type";

// assets
import "../../../assets/styles/components/modal.scss";


function Modal({ visible, children, className = "", onClose, footer, title }: ModalInterface) {
  const [isOpen, setIsOpen] = useState(!!visible);
  const [isMounted, setIsMounted] = useState(!!visible);


  useEffect(() => {
    if (typeof visible !== "undefined") {
      if (visible) {
        setIsMounted(true);
        
        setTimeout(() => setIsOpen(true));
      } else {
        setIsOpen(false);
      }
    }
  }, [visible]);
 

  const modalClassNames = classNames(
    "pdp-chat-modal",
    className,
    {
      "pdp-chat-modal_visible": !!isOpen
    }
  );

  const handleClose = () => {
    onClose && onClose();
    setIsOpen(false);

    setTimeout(() => setIsMounted(false));
  }

  if (!isMounted) return null;

  return (
    <RenderInPortal>
      <div
        className={`pdp-chat-modal-mask ${isOpen ? "pdp-chat-modal-mask_visible" : ""}`}
        onTransitionEnd={() => !isOpen && handleClose()}
      >
        <div className={modalClassNames}>
          <div className="pdp-chat-modal__header">
            { title
              ? <p className="pdp-chat-modal__header-title">{ title }</p>
              : null
            }
            <AiOutlineCloseCircle className="pdp-chat-modal__header-icon"/>
          </div>
          <div className="pdp-chat-modal__body">
            { children }
          </div>
          {
            footer
              ? <div className="pdp-chat-modal__footer">{ footer }</div>
              : null
          }
        </div>
      </div>
    </RenderInPortal>
  );
}

export default Modal;
