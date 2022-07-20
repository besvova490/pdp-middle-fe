import { useState, useEffect } from "react";

// helpers
import classNames from "../../../helpers/classNames";
import TabsInterface from "../../../__types__/components/Tabs.type";

// assets
import "../../../assets/styles/components/tabs.scss";


function Tabs({ className = "", onChange, defaultActiveKey, activeKey, tabs = [], ...rest }: TabsInterface) {
  const [activeTabKey, setActiveTabKey] = useState<null | string>(activeKey || defaultActiveKey || null);

  useEffect(() => {
    if (typeof activeKey !== "undefined") {
      setActiveTabKey(activeKey);
    }
  }, [activeKey]);


  const tabsClassNames = classNames(
    "pdp-chat-tabs",
    className,
  );

  const getSingleTabClassName = (tabKey: string, disabled: boolean) => {

    return classNames(
      "pdp-chat-tabs__single-tab",
      {
        "pdp-chat-tabs__single-tab_disabled": disabled,
        "pdp-chat-tabs__single-tab_active": activeTabKey === tabKey,
      },
    );
  }

  const handleTabChange = (tabKey: string) => {
    setActiveTabKey(tabKey);
    onChange && onChange(tabKey);
  }


  return (
    <div { ...rest } className={tabsClassNames}>
      {
        tabs.map((item, index) => (
          <div
            key={`${index}-${item.key}`}
            className={getSingleTabClassName(item.key, !!item.disabled)}
            onClick={() => !item.disabled && handleTabChange(item.key)}
          >
            <span className="pdp-chat-tabs__single-tab-label">
              { item.label }
            </span>
          </div>
        ))
      }
    </div>
  );
}

export default Tabs;
