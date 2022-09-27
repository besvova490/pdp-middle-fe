// assets
import ChatIcon from "../../../icons/ChatIcon";


function EmptyChatState({ label = "No chats yet" }) {

  return (
    <div className="pdp-chat__empty-state">
      <ChatIcon className="pdp-chat__empty-state-icon"/>
      <span className="pdp-chat__empty-state-label">{ label }</span>
    </div>
  );
}

export default EmptyChatState;
