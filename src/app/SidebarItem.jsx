import React from 'react';

const SidebarItem = ({ title, onClick }) => {
  return (
    <button
      className="flex items-center p-2 space-x-2 hover:bg-gray-200"
      onClick={onClick}
    >
      {/* 可以根据需要添加图标 */}
      {/* <Icon /> */}
      <span>{title}</span>
    </button>
  );
};

export default SidebarItem;
