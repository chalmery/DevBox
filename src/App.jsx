import React, { useState } from 'react';
import SidebarItem from "@/app/SidebarItem";
import JsonTools from "@/compontes/JsonTools";
import JsonDiff from "@/compontes/JsonDiff";
// 导入其他组件

const App = () => {

  const dataSource = [
     {"title":"Json工具","component":<JsonTools/>},
     {"title":"Json比对","component":<JsonDiff/>},
  ]

  const [activeComponent, setActiveComponent] = useState(<JsonTools/>);

  const handleItemClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <div className="flex h-screen w-auto">
      <div className="bg-gray-100">
        {dataSource && dataSource.map((data)=>{
          return <SidebarItem
            title= {data.title}
            onClick={() => handleItemClick(data.component)}
          />
        })}
        {/* 添加其他工具栏项 */}
      </div>
      <div className="w-3/4 p-4">
        {activeComponent}
        {/* 添加其他组件的条件渲染 */}
      </div>
    </div>
  );
};

export default App;
