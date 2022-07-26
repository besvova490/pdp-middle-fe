import React, { LegacyRef } from "react";
import { FiSend } from "react-icons/fi";
import { MdOutlinePhotoCamera } from "react-icons/md";
import TextareaAutosize from "react-textarea-autosize";

// helpers
import classNames from "../../../../helpers/classNames";
import { ChatInputInterface } from "../../../../__types__/containers/Chat.type";

// assets
import "../../../../assets/styles/container/chat/chat-input.scss";

interface ChatInputStateInterface {
  value: string;
}


class ChatInput extends React.Component<ChatInputInterface, ChatInputStateInterface> {
  constructor(props: ChatInputInterface) {
    super(props);

    this.state = {
      value: props.value || "",
    };
  }

  static getDerivedStateFromProps(nextProps: ChatInputInterface, currentState: ChatInputInterface) {
    if (nextProps.hasOwnProperty("value") && (nextProps.value !== currentState.value)) {
      
      return { value: nextProps.value };
    }

    return null;
  }

  handleSendMessage = () => {
    const { onSend } = this.props;
    const { value } = this.state;

    onSend && onSend(value);
    this.setState({ value: "" });
  }

  onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ value: e.target.value });
  }


  render() {
    const { className = "", fullWidth, forwardedRef } = this.props;
    const { value } = this.state;

    const chatClassNames = classNames(
      "pdp-chat-input",
      className,
      {
        "pdp-chat-input_full-width": !!fullWidth,
      }
    );

    return (
      <div className={chatClassNames} ref={forwardedRef as LegacyRef<HTMLDivElement>}>
        <MdOutlinePhotoCamera className="pdp-chat-input__camera-icon"/>
        <div className="pdp-chat-input__body">
          <TextareaAutosize
            className="pdp-chat-input__body-tag"
            placeholder="Write a message..."
            value={value}
            onChange={this.onChange}
          />
          <div className="pdp-chat-input__body-controls">
            <span className="pdp-chat-input__body-controls-send">
              <FiSend
                className="pdp-chat-input__body-controls-send-icon"
                onClick={this.handleSendMessage}
              />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default React.forwardRef<HTMLElement, ChatInputInterface>(
  (props, ref) => <ChatInput { ...props } forwardedRef={ref}/>
);
