import { useState, useEffect } from "react";

// components
import VideoCallControls from "./components/VideoCallControls";
import VideoBlock from "./components/VideoBlock";

// assets
import "../../../assets/styles/container/video-call.scss";


function VideoCall() {
  const [userVideoStream, setUserVideoStream] = useState<MediaStream | null>(null);
  const [isCameraOff, setIsCameraOff] = useState(true);

  useEffect(() => {
    !isCameraOff && navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    }).then(stream => {
      setUserVideoStream(stream);
    });

    if (isCameraOff && userVideoStream) {
      userVideoStream.getTracks()[0].stop();
    }

    return () => {
      userVideoStream?.getTracks()[0].stop();
    };
  }, [isCameraOff]);


  return (
    <div className="pdp-chat-video-call">
      <div className="pdp-chat-video-call__videos-list">
        <VideoBlock
          isCameraOff={isCameraOff}
          username="My"
          isOwn
          ref={el => {
            if (!el) return;

            el.srcObject = userVideoStream;
          }}
        />
        <VideoBlock username="flat_six_aircooled"/>
        <VideoBlock username="ferrarigroup"/>
      </div>
      <VideoCallControls
        isCameraOff={isCameraOff}
        onCameraToggle={() => setIsCameraOff(!isCameraOff)}
        onMicrophoneToggle={() => null}
        onLeave={() => null}
      />
    </div>
  );
}

export default VideoCall;
