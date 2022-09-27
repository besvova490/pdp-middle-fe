import { io } from "socket.io-client";

//types
import { InterfaceSocket } from "../__types__/socket/auth.type";

//helpers
import { SOCKET_CONNECTION_ERROR, SOCKET_CONNECTION } from "./socketEvents";
import { SOCKET_API_URL } from "../helpers/constants";

const socketClient: InterfaceSocket = io(`${SOCKET_API_URL}`, { autoConnect: false, reconnection: false });

socketClient.onAny((event, ...args) => {
  console.log(event, args);
});

socketClient.on(SOCKET_CONNECTION_ERROR, () => {
  socketClient.off(SOCKET_CONNECTION);
});

export default socketClient;
