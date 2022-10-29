import React from "react";
import { FaUserAlt } from "react-icons/fa";

// helpers
import { VideoCallBlockInterface } from "../../../../__types__/containers/VideoCall.types";


const VideoBlock = React.forwardRef<HTMLVideoElement, VideoCallBlockInterface>((props, ref) => {
  const { username, isCameraOff = true, isOwn, isMuted } = props;


  return (
    <div className="pdp-chat-video-call__video-block">
      {
        isCameraOff
          ? (
            <div className="pdp-chat-video-call__video-block-empty">
              <FaUserAlt className="pdp-chat-video-call__video-block-empty-icon"/>
            </div>
          )
          : (
            <video
              ref={ref}
              autoPlay
              id={username}
              muted={!!isOwn || isMuted}
              className="pdp-chat-video-call__video-block-tag"
            />
          )
      }
      <span className="pdp-chat-video-call__video-block-label">{ username }</span>
    </div>
  );
});


VideoBlock.displayName = "VideoBlock";

export default VideoBlock
