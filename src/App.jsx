import React, { useState } from "react";
import SidebarItem from "@/app/SidebarItem";
import JsonTools from "@/app/JsonTools";
import JsonDiff from "@/app/JsonDiff";
// 导入其他组件

const App = () => {
  const dataSource = [
    {title: "Json工具", component: <JsonTools />, type: "JsonTools" },
    {title: "Json比对", component: <JsonDiff />, type: "JsonDiff" },
  ];

  const [activeComponent, setActiveComponent] = useState(<JsonTools />);
  const [activeComponentType, setActiveComponentType] = useState("JsonTools");

  const handleItemClick = (componentName, type) => {
    setActiveComponent(componentName);
    setActiveComponentType(type);
  };

  return (
    <div className="flex h-screen w-screen overflow-y-hidden">
      <div className="bg-gray-100 w-1/8 h-full">
        {dataSource &&
          dataSource.map((data) => {
            return (
              <SidebarItem
                key={data.type}
                title={data.title}
                onClick={() => handleItemClick(data.component, data.type)}
                isActive={activeComponentType === data.type}
              />
            );
          })}
      </div>
      <div className="flex-1 h-full">{activeComponent}</div>
    </div>
  );
};

export default App;
