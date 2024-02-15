import React, { useEffect, useRef, useState } from "react";
import { Heading } from "./Heading";
import Toolbar from "./Toolbar";

const Content = () => {
  const [content, setContent] = useState(" ");

  const noteRef = useRef();

  const handleNote = (e) => {
    setContent(e.target.innerHTML);
    window.localStorage.setItem("content", e.target.innerHTML);
  };

  useEffect(() => {
    // note
    const div = noteRef.current;
    const range = document.createRange();
    const sel = window.getSelection();
    range.selectNodeContents(div);
    range.collapse(false);
    sel.removeAllRanges();
    sel.addRange(range);
  }, [content]);

  useEffect(() => {
    let getContent = window.localStorage.getItem("content");
    setContent(getContent);
  }, []);

  return (
    <div className="flex ">
      <div
        className="w-1/6 flex flex-row items-start justify-between text-xl px-4 mt-2
      "
      >
        <Toolbar></Toolbar>
      </div>
      <div className="w-4/6 px-4">
        <div>
          <Heading></Heading>
        </div>
        <div
          ref={noteRef}
          contentEditable="true"
          className=" w-full h-[70vh]  p-2 text-left outline-0 mt-4 "
          onInput={handleNote}
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </div>
  );
};

export default Content;
