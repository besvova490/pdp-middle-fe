import { useRef } from "react";
import { BiUpload } from "react-icons/bi";
import { toast } from "react-toastify";

// helpers
import uploadToS3 from "../../../aws/s3";
import classNames from "../../../helpers/classNames";
import UploadInterface from "../../../__types__/components/Upload.type";

// assets
import "../../../assets/styles/components/upload.scss";


function Upload ({ className = "", children, name, accept, onChange }: UploadInterface) {
  const ref = useRef<HTMLInputElement>(null);

  const handleUpload = (files: FileList | null) => {
    if (files) {
      uploadToS3(files[0])
        .then(resp => onChange && onChange({ name: resp?.Key, url: resp?.Location }))
        .catch(e => toast.error(e.message))
    }
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
