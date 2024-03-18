import React from "react";

import deleteIcon from "../../assets/delete.png";

import "./Note.css";

import html2pdf from "html2pdf.js";
import { useState } from "react";

function Note(props) {
  const [timeoutId, setTimeoutId] = useState(null); 

  const formatDate = (value) => {
  };

  const debounce = (func) => {
    clearTimeout(timeoutId); 
    const id = setTimeout(() => {
      func();
    }, 30000);
    setTimeoutId(id); 
  };

  const updateText = (text, id) => {
    debounce(() => props.updateText(text, id));
  };

  const downloadAsPDF = () => {
    const element = document.querySelector('.note'); 
    html2pdf(element);
  };

  return (
    <div className="note" style={{ backgroundColor: props.note.color }}>
      <textarea
        className="note_text"
        defaultValue={props.note.text}
        onChange={(event) => updateText(event.target.value, props.note.id)}
      />
      <div className="note_footer">
        <p>{formatDate(props.note.time)}</p>
        <img
          src={deleteIcon}
          alt="DELETE"
          onClick={() => props.deleteNote(props.note.id)}
        />
        <button className="pdf" onClick={downloadAsPDF}>Download as PDF</button>
      </div>
    </div>
  );
}

export default Note;
