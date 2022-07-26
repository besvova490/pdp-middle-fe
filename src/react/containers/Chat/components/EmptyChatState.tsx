// assets
import ChatIcon from "../../../icons/ChatIcon";


function EmptyChatState() {

  return (
    <div className="pdp-chat__empty-state">
      <ChatIcon className="pdp-chat__empty-state-icon"/>
      <span className="pdp-chat__empty-state-label">No chats yet</span>
    </div>
  );
}

export default EmptyChatState;
