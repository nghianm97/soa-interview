import TiptapEditor from "@/components/base/text-editor/TiptapEditor";
import React from "react";

/** Primary UI component for user interaction */
export const TextEditorComponent = () => {
  return (
    <TiptapEditor
      className="border-slate-200 rounded-lg border min-h-[300px]"
      value={""}
      placeholder={"...Nhập câu trả lời"}
      onChangeNow={(value) => {
        console.log(value);
      }}
    />
  );
};
