import { Socket } from "socket.io-client";


export interface InterfaceSocketUser {
  userId: string;
  name: string;
  isConnected: true;
}

export interface InterfaceSocket extends Socket {
  userId?: number
}
