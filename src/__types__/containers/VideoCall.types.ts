import { DetailedHTMLProps, HTMLAttributes } from "react";


export interface VideoCallBlockInterface extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  username?: string;
  isCameraOff?: boolean;
  isOvn?: boolean;
}

export interface VideoCallControlsInterface extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  isCameraOff?: boolean;
  isMicrophoneOff?: boolean;
  onMicrophoneToggle: (e: boolean) => void;
  onCameraToggle: (e: boolean) => void;
  onLeave: () => void;
}

