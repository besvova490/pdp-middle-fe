import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// components
import VideoCallControls from "../VideoCall/components/VideoCallControls";
import VideoBlock from "../VideoCall/components/VideoBlock";

// helpers
import peerConnection, { WEB_RTC_OFFER, WEB_RTC_ANSWER, WEB_RTC_ICE_CANDIDATE } from "../../../helpers/webRTC";
import { useUserProfile } from "../../../context/UserProfileContext";
import { JOIN_TO_THE_CALL } from "../../../socket/socketEvents";
import socketClient from "../../../socket";


function VideoCallRoom({ stream }: { stream: MediaStream | null }) {
  const [isCameraOff, setIsCameraOff] = useState(false);
  const [remoteTracks, setRemoteTracks] = useState<Array<MediaStream>>([]);
  
  const { id } = useParams();
  const { user } = useUserProfile();
  const guest = { id: user?.id, userName: user?.userName, avatar: user?.avatar };

  peerConnection.onicecandidate = (e) => {
    if (e.candidate) {
      socketClient.emit(
        JOIN_TO_THE_CALL,
        {
          code: id,
          guest,
          candidate: e.candidate,
          callType: WEB_RTC_ICE_CANDIDATE
        }
      );
    }
  }

  peerConnection.onconnectionstatechange = (e) => {
    console.log("onconnectionstatechange", e);
  }

  peerConnection.ontrack = (e) => {
    console.log("ontrack", e);

    const remoteMediaStream = new MediaStream();
    remoteMediaStream.addTrack(e.track);
    
    setRemoteTracks([...remoteTracks, remoteMediaStream])
  }

  const handlerOffer = async (data: any) => {
    
    switch (data.callType) {
      case WEB_RTC_OFFER: {
        await peerConnection.setRemoteDescription(data.offer);
        const answer = await peerConnection.createAnswer();

        await peerConnection.setLocalDescription(answer);
        socketClient.emit(JOIN_TO_THE_CALL, { code: id, guest, answer, callType: WEB_RTC_ANSWER });

        break;
      }
      case WEB_RTC_ANSWER: {
        await peerConnection.setRemoteDescription(data.answer);

        break;
      }
      case WEB_RTC_ICE_CANDIDATE: {
        await peerConnection.addIceCandidate(data.candidate).catch(e => console.log(e));
        break;
      }
      default:
        break;
    }

  }

  const initVideoRoom = async () => {
    stream?.getTracks().forEach(track => {
      peerConnection.addTrack(track, stream);
    })

    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);

    socketClient.emit(JOIN_TO_THE_CALL, { code: id, guest, offer, callType: WEB_RTC_OFFER });
    socketClient.on(JOIN_TO_THE_CALL, handlerOffer);
  }

  useEffect(() => {
    if (!user?.id || !id || !stream) return;

    initVideoRoom();

    return () => {
      socketClient.off(JOIN_TO_THE_CALL);
    };
  }, [user, stream]);


  return (
    <div className="pdp-chat-video-call">
      <div className="pdp-chat-video-call__videos-list">
        <VideoBlock
          isCameraOff={isCameraOff}
          username="My"
          isOwn
          ref={el => {
            if (!el) return;

            el.srcObject = stream;
          }}
        />
        {
          remoteTracks.map((item, index) => (
            <VideoBlock
              key={index}
              isCameraOff={false}
              username="flat_six_aircooled"
              ref={el => {
                if (!el) return;
    
                el.srcObject = item;
              }}
            />
          ))
        }
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

export default VideoCallRoom;
