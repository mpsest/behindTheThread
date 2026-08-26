import React, { useState } from "react";
import PlusButton from "../components/PlusButton.jsx";
import TextEditor from "../components/TextEditor.jsx";

export default function Misturas() {
  const [editorContent, setEditorContent] = useState("");
  return (
    <div>
      <h1>Misturas</h1>
      <p>Welcome to the Misturas page!</p>
      <PlusButton>
        <h2>Additional Content</h2>
        <p>This content is revealed when the plus button is clicked.</p>
      </PlusButton>
      <TextEditor value={editorContent} onChange={setEditorContent} />
      <div>
        <h2>Preview:</h2>
        <div dangerouslySetInnerHTML={{ __html: editorContent }} />
      </div>
    </div>
  );
}
