import React, { useState } from "react";

import ReactDiffViewer from "react-diff-viewer-continued";

const JsonDiff = () => {
  const [leftText, setLeftText] = useState("");
  const [rightText, setRightText] = useState("");

  const handleLeftInputChange = (event) => {
    setLeftText(event.target.value);
  };

  const handleRightInputChange = (event) => {
    setRightText(event.target.value);
  };

  return (
    <div className="bg-white h-screen flex flex-col">
      <div className="flex-1 flex">
        <div className="w-1/2 border-r">
          {/* 左侧输入框 */}
          <textarea
            style={{ resize: "none" }}
            className="border-0 outline-none w-full h-full rounded"
            type="text"
            placeholder="请输入"
            value={leftText}
            onChange={handleLeftInputChange}
          />
        </div>
        <div className="w-1/2">
          {/* 右侧输入框 */}
          <textarea
            style={{ resize: "none" }}
            className="border-0 outline-none w-full h-full rounded"
            type="text"
            placeholder="请输入"
            value={rightText}
            onChange={handleRightInputChange}
          />
        </div>
      </div>
      <div className="flex-1 border-t">
        {/* 下面的 div */}
        <ReactDiffViewer oldValue={leftText} newValue={rightText} splitView={true} />
      </div>
    </div>
  );
};

export default JsonDiff;
