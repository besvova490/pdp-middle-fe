import { useParams, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

// elements
import Button from "../../elements/Button";

// components
import VideoBlock from "../VideoCall/components/VideoBlock";

// helpers
import { useUserProfile } from "../../../context/UserProfileContext";
import socketClient from "../../../socket";
import { PRE_OFFER } from "../../../socket/socketEvents";
import { message } from "../VideoCall/components/VideoCodeMessage";

// assets
import "../../../assets/styles/pages/video-hall.scss";
import "../../../assets/styles/container/video-call.scss";


function VideoMeetHall({ stream }: { stream: MediaStream | null }) {
  const { id } = useParams();
  const { user } = useUserProfile();
  const history = useNavigate();

  const handleStartCall = () => {
    const code = uuidv4();

    message({ code });
    socketClient.emit(PRE_OFFER, { code, author: { id: user?.id, username: user?.userName } });
    history(`/video-meet/${code}`);
  };

  return (
    <div className="pdp-chat-video-page">
      <div className="pdp-chat-video-page__preview">
        <VideoBlock
          isCameraOff={false}
          username={user?.userName}
          isOwn
          ref={el => {
            if (!el) return;

            el.srcObject = stream;
          }}
        />
      </div>
      <div className="pdp-chat-video-page__controls">
        <h2 className="pdp-chat-video-page__controls-heder">Ready to join?</h2>
        <div className="pdp-chat-video-page__controls-description">
          No one else is here
        </div>
        <div className="pdp-chat-video-page__controls-btn-group">
          <Button onClick={handleStartCall}>
            Join Call
          </Button>
          {
            !id
              ? (
                <Button type="primary" onClick={handleStartCall}>
                  Start New
                </Button>
              )
              : null
          }
        </div>
      </div>
    </div>
  );
}

export default VideoMeetHall;
