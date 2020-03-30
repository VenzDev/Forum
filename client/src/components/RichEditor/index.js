import React, { useState } from "react";
import InlineStyleControls from "./InlineStyleControls";
import BlockStyleControls from "./BlockStyleControls";
import { Editor, EditorState, convertToRaw, RichUtils } from "draft-js";
import "./richeditor.scss";

const RichEditor = ({ handleRichEditor }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [rawData, setRawData] = useState(null);

  const onChange = editorState => {
    setEditorState(editorState);
    setRawData(convertToRaw(editorState.getCurrentContent()));
    handleRichEditor(rawData);
  };

  const toggleInlineStyle = inlineStyle => {
    onChange(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  };
  const toggleBlockType = blockType => {
    onChange(RichUtils.toggleBlockType(editorState, blockType));
  };

  return (
    <>
      <div className="richEditorContainer">
        <BlockStyleControls editorState={editorState} onToggle={toggleBlockType} />
        <InlineStyleControls editorState={editorState} onToggle={toggleInlineStyle} />
        <Editor editorState={editorState} placeholder="Your post..." onChange={onChange}></Editor>
      </div>
    </>
  );
};

export default RichEditor;
