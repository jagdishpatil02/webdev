import { useRef, useState } from "react";
import { FaBold, FaItalic, FaStrikethrough, FaHeading } from "react-icons/fa";
import { LuHeading2 } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import { RxDividerHorizontal } from "react-icons/rx";
import { PiListBullets } from "react-icons/pi";

import { Heading } from "./Heading";
import { ClearContext } from "../context/ClearContext";
import { Description } from "./Description";
import { MdOutlineFormatListNumbered } from "react-icons/md";
import { BsBlockquoteLeft } from "react-icons/bs";
import { FaCode } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";

const Pad = () => {
  const [clearData, setClearData] = useState(false);
  const descriptionRef = useRef();

  const fontBoldHandle = () => {
    document.execCommand("bold", false, null);
  };

  const fontItalicHandle = () => {
    document.execCommand("italic", false, null);
  };

  const fontStrikeThrough = () => {
    document.execCommand("strikethrough", false, null);
  };

  const fontLargeBold = () => {
    document.execCommand("formatBlock", false, "h1");
  };

  const fontLarge = () => {
    document.execCommand("formatBlock", false, "h2");
  };

  const dividerHandle = () => {
    document.execCommand("insertHTML", false, "<hr>");
  };

  const bulletListHandle = () => {
    document.execCommand("insertUnorderedList", false, null);
  };

  const numberListHandle = () => {
    document.execCommand("insertorderedList", false, null);
  };

  const blockQuoteHandle = () => {
    const selection = window.getSelection();
    const block = selection.anchorNode.parentNode;

    if (block.nodeName === "BLOCKQUOTE") {
      // If the current block is a blockquote, change it to a paragraph
      document.execCommand("formatBlock", false, "p");
    } else {
      // If the current block is not a blockquote, change it to a blockquote
      document.execCommand("formatBlock", false, "blockquote");
    }
  };

  const codeHandle = (e) => {
    document.execCommand(
      "insertHTML",
      false,
      "<pre><code>Your code here</code></pre>"
    );
  };

  const deleteNote = () => {
    localStorage.clear();
    setClearData((prev) => !prev);
  };

  // Function to get content from the contenteditable div
  const getContent = () => {
    if (descriptionRef.current) {
      return descriptionRef.current.getDivContent();
    }
    return "";
  };

  const downloadNote = () => {
    const content = getContent();
    const element = document.createElement("a");
    const file = new Blob([content], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "mynote.txt";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <>
      <ClearContext.Provider value={{ clearData }}>
        <div className="w-full mb-8">
          <Heading></Heading>
        </div>
        <div className="text-left">
          <button onClick={fontBoldHandle} className="mr-4 text-[#757575]">
            <FaBold className="text-xl" />
          </button>
          <button onClick={fontItalicHandle} className="mr-4 text-[#757575]">
            <FaItalic className="text-xl" />
          </button>
          <button onClick={fontStrikeThrough} className="mr-4 text-[#757575]">
            <FaStrikethrough className="text-xl" />
          </button>

          <button onClick={fontLargeBold} className="mr-4 text-[#757575]">
            <FaHeading className="text-xl" />
          </button>
          <button onClick={fontLarge} className="mr-4 text-[#757575]">
            <LuHeading2 className="text-3xl relative top-[5px]" />
          </button>
          <button onClick={dividerHandle} className="mr-4 text-[#757575]">
            <RxDividerHorizontal className="text-3xl relative top-[5px]" />
          </button>
          <button onClick={bulletListHandle} className="mr-4 text-[#757575]">
            <PiListBullets className="text-3xl relative top-[5px]" />
          </button>
          <button onClick={numberListHandle} className="mr-4 text-[#757575]">
            <MdOutlineFormatListNumbered className="text-3xl relative top-[5px]" />
          </button>
          <button onClick={blockQuoteHandle} className="mr-4 text-[#757575]">
            <BsBlockquoteLeft className="text-3xl relative top-[5px]" />
          </button>
          <button onClick={codeHandle} className="mr-4 text-[#757575]">
            <FaCode className="text-3xl relative top-[5px]" />
          </button>
          <button onClick={deleteNote} className="mr-4 text-[#757575]">
            <MdDelete className="text-xl" />
          </button>
          <button onClick={downloadNote} className="mr-4 text-[#757575]">
            <IoMdDownload className="text-xl" />
          </button>
        </div>
        <Description ref={descriptionRef}></Description>
      </ClearContext.Provider>
    </>
  );
};

export default Pad;
