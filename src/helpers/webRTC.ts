// constants
export const WEB_RTC_OFFER = "WEB_RTC_OFFER";
export const WEB_RTC_ANSWER = "WEB_RTC_ANSWER";
export const WEB_RTC_ICE_CANDIDATE = "WEB_RTC_ICE_CANDIDATE";


// {
//   username: process.env.REACT_APP_TURN_SERVER_USERNAME,
//   urls: process.env.REACT_APP_TURN_SERVER || "",
//   credential: process.env.REACT_APP_TURN_SERVER_PASSWORD
// }
// {
//   "username": "3801105d966aa02508aa9ed248b46fabb4b7db4d6f9db7a7fc70b84cbef64490",
//   "urls": "turn:global.turn.twilio.com:3478?transport=udp",
//   "credential": "su+n47ZrdSk3iTzWNZIus1O/fs54XrLUMA7Gh12bPKs="
// }

const CONFIGURATION: RTCConfiguration = {
  iceServers: [{
    urls: [process.env.REACT_APP_STUN_SERVER || ""],
  },
  {
    username: process.env.REACT_APP_TURN_SERVER_USERNAME,
    urls: process.env.REACT_APP_TURN_SERVER || "",
    credential: process.env.REACT_APP_TURN_SERVER_PASSWORD
  }],
  iceTransportPolicy: "relay",
};

const webRTC = new RTCPeerConnection(CONFIGURATION);

export default webRTC;
