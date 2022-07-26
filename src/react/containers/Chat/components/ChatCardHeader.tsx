import { ReactNode } from "react";


function ChatCardHeader({ children }: { children: ReactNode }) {

  return (
    <div className="pdp-chat__header">
      { children }
    </div>
  );
}

export default ChatCardHeader;
