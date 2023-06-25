import React, { useState } from "react";

const SidebarItem = ({ title, onClick, isActive }) => {
  return (
    <button
      className={`flex w-full items-center p-2 space-x-2 hover:bg-blue-600 hover:text-white
    ${isActive ? "bg-blue-500 text-white" : "bg-gray-100 text-black"}`}
      onClick={onClick}
    >
      {/* 可以根据需要添加图标 */}
      {/* <Icon /> */}
      <span>{title}</span>
    </button>
  );
};

export default SidebarItem;
