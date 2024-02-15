import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBold,
  faItalic,
  faStrikethrough,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
const Toolbar = () => {
  const fontBoldHandle = () => {
    document.execCommand("bold", false, null);
  };

  const fontItalicHandle = () => {
    document.execCommand("italic", false, null);
  };

  const fontStrikeThrough = () => {
    document.execCommand("strikethrough", false, null);
  };

  const deleteNote = () => {
    localStorage.clear();
  };

  return (
    <>
      <button onClick={fontBoldHandle}>
        <FontAwesomeIcon icon={faBold} />
      </button>
      <button onClick={fontItalicHandle}>
        <FontAwesomeIcon icon={faItalic} />
      </button>
      <button onClick={fontStrikeThrough}>
        <FontAwesomeIcon icon={faStrikethrough} />
      </button>
      <button onClick={deleteNote}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </>
  );
};

export default Toolbar;
