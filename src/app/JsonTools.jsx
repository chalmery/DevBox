import React, { useState } from "react";
import JsonView from "react18-json-view";
import "react18-json-view/src/style.css";

const JsonTools = () => {
  const [leftInputValue, setLeftInputValue] = useState("");

  const [rightInputValue, setRightInputValue] = useState(null);

  const handleLeftInputChange = (event) => {
    setLeftInputValue(event.target.value);
    try {
      const parsedJson = JSON.parse(event.target.value);
      setRightInputValue(parsedJson);
    } catch (error) {
      setRightInputValue(null);
    }
  };

  /**
   * 清空
   */
  const handleClear = () => {
    setLeftInputValue("");
  };

  /**
   * 格式化
   */
  const handleFormat = () => {
    try {
      const formattedJsonString = JSON.stringify(
        JSON.parse(leftInputValue),
        null,
        2
      );
      setLeftInputValue(formattedJsonString);
    } catch (error) {}
  };

  /**
   * 压缩
   */
  const handleCompress = () => {
    try {
      setLeftInputValue(JSON.stringify(JSON.parse(leftInputValue), null, 0));
    } catch (error) {}
  };

  /**
   * 转义
   */
  const handleEscape = () => {
    try {
      setLeftInputValue(JSON.stringify(leftInputValue));
    } catch (error) {}
  };

  /**
   * 压缩并转义
   */
  const handleCompressAndEscape = () => {
    try {
      setLeftInputValue(
        JSON.stringify(JSON.stringify(JSON.parse(leftInputValue), null, 0))
      );
    } catch (error) {}
  };

  /**
   * 去除转义
   */
  const handleUnescape = () => {
    try {
      const parsedJsonObject = JSON.parse(leftInputValue);
      setLeftInputValue(parsedJsonObject);
    } catch (error) {}
  };

  /**
   * 去除转义并且格式化
   */
  const handleUnescapeAndFormat = () => {
    try {
      setLeftInputValue(
        JSON.stringify(JSON.parse(JSON.parse(leftInputValue)), null, 2)
      );
    } catch (error) {}
  };

  const buttonConfig = [
    { label: "清空", onClick: handleClear },
    { label: "格式化", onClick: handleFormat },
    { label: "压缩", onClick: handleCompress },
    { label: "转义", onClick: handleEscape },
    { label: "压缩并转义", onClick: handleCompressAndEscape },
    { label: "去除转义", onClick: handleUnescape },
    {
      label: "去除转义并格式化",
      onClick: handleUnescapeAndFormat,
    },
  ];

  return (
    <div className="w-full h-full">
      <div className="bg-gray-100 p-4">
        {buttonConfig.map((button, index) => (
          <button
            key={index}
            onClick={button.onClick}
            className="bg-blue-500 hover:bg-blue-700 
            text-white px-2 py-1 rounded mr-2"
          >
            {button.label}
          </button>
        ))}
      </div>

      {/* 左右分栏 */}
      <div className="bg-white h-full flex">
        <textarea
          className="border-0 outline-none w-1/2 p-2 rounded"
          type="text"
          placeholder="请输入"
          value={leftInputValue}
          onChange={handleLeftInputChange}
        />
        <div className="items-center border-l border-gray-300" />
        <div className="flex-1 p-2">
          {rightInputValue && <JsonView src={rightInputValue} />}
        </div>
      </div>
    </div>
  );
};

export default JsonTools;
