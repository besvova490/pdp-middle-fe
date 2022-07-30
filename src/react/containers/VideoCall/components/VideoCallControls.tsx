import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";
import { BsCameraVideoFill, BsCameraVideoOffFill } from "react-icons/bs";
import { MdCallEnd } from "react-icons/md";

// elements
import Button from "../../../elements/Button";

// helpers
import { VideoCallControlsInterface } from "../../../../__types__/containers/VideoCall.types";


function VideoCallControls(props: VideoCallControlsInterface) {
  const { isCameraOff, isMicrophoneOff, onCameraToggle, onMicrophoneToggle, onLeave } = props;

  return (
    <div className="pdp-chat-video-call__controls">
      <Button
        type="primary"
        size="small"
        className="pdp-chat-video-call__controls-btn"
        onClick={() => onMicrophoneToggle(!isCameraOff)}
      >
        {
          isMicrophoneOff
            ? <FaMicrophoneSlash className="pdp-chat-video-call__controls-icon"/>
            : <FaMicrophone className="pdp-chat-video-call__controls-icon"/>
        }
      </Button>
      <Button
        type="primary"
        size="small"
        className="pdp-chat-video-call__controls-btn"
        onClick={() => onCameraToggle(!isCameraOff)}
      >
        {
          isCameraOff
            ? <BsCameraVideoOffFill className="pdp-chat-video-call__controls-icon"/>
            : <BsCameraVideoFill className="pdp-chat-video-call__controls-icon"/>
        }
      </Button>
      <Button
        danger
        type="primary"
        className="pdp-chat-video-call__controls-end-btn"
        size="small"
        onClick={() => onLeave()}
      >
        <MdCallEnd className="pdp-chat-video-call__controls-icon pdp-chat-video-call__controls-end-icon"/>
      </Button>
    </div>
  );
}

export default VideoCallControls;
