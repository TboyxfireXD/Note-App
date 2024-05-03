import React from "react";
import "./Note.css";
import "devextreme/dist/css/dx.light.css";
import { TextArea } from "devextreme-react/text-area";

const Note = () => {
  return (
    <div>
      <header>Notes</header>
      <div className="input">
        <input type="text" placeholder="Note Heading" />
      </div>
      <TextArea />
      <TextArea />
      <TextArea />
      <TextArea />
      <TextArea />
      <TextArea />
      <TextArea />
      <TextArea />
      <TextArea />
      <footer>Copyright &copy;2024</footer>
    </div>
  );
};

export default Note;
