import React, { useState } from "react";
import InlineStyleControls from "./InlineStyleControls";
import BlockStyleControls from "./BlockStyleControls";
import { Editor, EditorState, convertToRaw, convertFromRaw, RichUtils } from "draft-js";
import "./richeditor.scss";

const RichEditor = ({ handleRichEditor, content }) => {
  if (content) {
    const obj = JSON.parse(content);
    var state = EditorState.createWithContent(convertFromRaw(obj));
  } else {
    state = EditorState.createEmpty();
  }

  const [editorState, setEditorState] = useState(state);
  const [rawData, setRawData] = useState(null);

  const onChange = (editorState) => {
    setEditorState(editorState);
    setRawData(convertToRaw(editorState.getCurrentContent()));
    handleRichEditor(rawData);
  };

  const toggleInlineStyle = (inlineStyle) => {
    onChange(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  };
  const toggleBlockType = (blockType) => {
    onChange(RichUtils.toggleBlockType(editorState, blockType));
  };

  const codeBlockStyle = (contentBlock) => {
    const type = contentBlock.getType();
    if (type === "code-block") {
      return "codeBlockStyle";
    }
  };

  return (
    <>
      <div className="richEditorContainer">
        <BlockStyleControls editorState={editorState} onToggle={toggleBlockType} />
        <InlineStyleControls editorState={editorState} onToggle={toggleInlineStyle} />
        <Editor
          blockStyleFn={codeBlockStyle}
          editorState={editorState}
          placeholder="Your post..."
          onChange={onChange}
        ></Editor>
      </div>
    </>
  );
};

export default RichEditor;
