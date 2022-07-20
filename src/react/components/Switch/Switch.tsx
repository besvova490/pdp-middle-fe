/* eslint-disable react/prop-types */
import React from "react";

// components
import Preloader from "../Preloader";

// helpers
import classNames from "../../../helpers/classNames";
import SwitchInterface from "../../../__types__/components/Switch.type";

// assets
import "../../../assets/styles/components/switch.scss";

// { checked, defaultChecked, disabled, loading, onChange, className = "", ...props }: SwitchInterface
class Switch extends React.Component<SwitchInterface, { isChecked: boolean }> {
  constructor(props: SwitchInterface) {
    super(props);

    this.state = {
      isChecked: !!props.checked || !!props.defaultChecked
    };
  }

  static getDerivedStateFromProps(nextProps: SwitchInterface, currentState: SwitchInterface) {
    if (nextProps.hasOwnProperty("checked") && (nextProps.checked !== currentState.checked)) {
      
      return { isChecked: nextProps.checked };
    }

    return null;
  }

  handleChange = () => {
    const { isChecked } = this.state;
    const { onChange, disabled, loading } = this.props;

    if (disabled || loading) return;

    this.setState({ isChecked: !isChecked });
    onChange && onChange(!isChecked);
  }

  render(): React.ReactNode {
    const { disabled, loading, className = "" } = this.props;
    const { isChecked } = this.state;

    const switchClassNames = classNames(
      "pdp-chat-switch",
      className,
      {
        "pdp-chat-switch_disabled": !!disabled || !!loading,
        "pdp-chat-switch_checked": !!isChecked,
      }
    );

    return (
      <button
        className={switchClassNames}
        onClick={() => this.handleChange()}
      >
        <span className="pdp-chat-switch__handler pdp-chat-switch__handler-off">
          Off
        </span>
        <span className="pdp-chat-switch__handler pdp-chat-switch__handler-on">
          On
        </span>
        <span className="pdp-chat-switch__inner"/>
        { loading
          ? <div className="pdp-chat-switch__preloader"><Preloader/></div>
          : null }
      </button>
    );
  }
}

export default Switch;
