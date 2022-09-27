import { toast } from "react-toastify";
import { MdOutlineContentCopy } from "react-icons/md";

// assets
import "../../../../assets/styles/components/video/pdp-chat-video-message.scss";

function VideoCodeMessage({ code }: { code: string }) {

  return (
    <div className="pdp-chat-video-message">
      <h2 className="pdp-chat-video-message__header">Your meeting's ready</h2>
      <p className="pdp-chat-video-message__description">
        Share this meeting link with others you want in the meeting
      </p>
      <div className="pdp-chat-video-message__code" onClick={() => navigator.clipboard.writeText(code)}>
        <p>{ code }</p>
        <MdOutlineContentCopy/>
      </div>
    </div>
  );
}

export const message = ({ code }: { code: string }) => {
  toast(
    <VideoCodeMessage code={code}/>,
    {
      position: "top-right",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }
  );
};

export default VideoCodeMessage;
