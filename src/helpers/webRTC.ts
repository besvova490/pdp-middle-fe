// constants
export const WEB_RTC_OFFER = "WEB_RTC_OFFER";
export const WEB_RTC_ANSWER = "WEB_RTC_ANSWER";
export const WEB_RTC_ICE_CANDIDATE = "WEB_RTC_ICE_CANDIDATE";


const CONFIGURATION: RTCConfiguration = {
  iceServers: [{
    urls: [process.env.REACT_APP_STUN_SERVER || ""]
  }],
};

const webRTC = new RTCPeerConnection(CONFIGURATION);

export default webRTC;
