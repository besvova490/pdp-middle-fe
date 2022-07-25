import { useRef } from "react";
import { BiUpload } from "react-icons/bi";

// helpers
import classNames from "../../../helpers/classNames";
import UploadInterface from "../../../__types__/components/Upload.type";

// assets
import "../../../assets/styles/components/upload.scss";


function Upload ({ className = "", children, name, accept }: UploadInterface) {
  const ref = useRef<HTMLInputElement>(null);

  const handleUpload = (e: FileList | null) => {
    console.log(e)
  }

  const uploadClassNames = classNames(
    "pdp-chat-upload",
    className,
  );

  return (
    <div className={uploadClassNames}>
      {
        children
          ? children
          : (
            <div className="pdp-chat-upload__controls" onClick={() => ref.current && ref.current.click()}>
              <BiUpload className="pdp-chat-upload__controls-icon"/>
              <input
                ref={ref}
                name={name}
                type="file"
                accept={accept}
                className="pdp-chat-upload__controls-input"
                onChange={e => handleUpload(e.target.files)}
              />
            </div>
          )
      }
    </div>
  );
}

export default Upload;
