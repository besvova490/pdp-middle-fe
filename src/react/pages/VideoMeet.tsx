import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// components
import VideoCallRoom from "../containers/VideoCallRoom";
import VideoMeetHall from "../containers/VideoCallHall";


function VideoMeet() {
  const [userVideoStream, setUserVideoStream] = useState<MediaStream | null>(null);
  
  const { id } = useParams();

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    }).then(stream => {
      setUserVideoStream(stream);
    });
  }, []);

  useEffect(() => () => {
    userVideoStream?.getTracks().forEach(track => track.stop());
  }, [userVideoStream]);

  if (!id) {

    return <VideoMeetHall stream={userVideoStream} />
  }

  return <VideoCallRoom stream={userVideoStream}/>;
}

export default VideoMeet;
