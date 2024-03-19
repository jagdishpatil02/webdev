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
import { MdFormatBold, MdFormatItalic, MdStrikethroughS } from "react-icons/md";

const Pad = () => {
  const [clearData, setClearData] = useState(false);
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [strike, setStrike] = useState(false);
  const [heading, setHeading] = useState(false);
  const [divider, setDividerHandle] = useState(false);
  const [ulList, setUlList] = useState(false);
  const [olList, setOlList] = useState(false);
  const [blockquote, setBlockQuote] = useState(false);
  const [code, setCode] = useState(false);

  const descriptionRef = useRef();

  const fontBoldHandle = () => {
    setBold(!bold);
    document.execCommand("bold", false, null);
  };

  const fontItalicHandle = () => {
    setItalic(!italic);
    document.execCommand("italic", false, null);
  };

  const fontStrikeThrough = () => {
    setStrike(!strike);
    document.execCommand("strikethrough", false, null);
  };

  const fontLarge = () => {
    setHeading(!heading);
    document.execCommand("formatBlock", false, "h2");
  };

  const dividerHandle = () => {
    setDividerHandle(!divider);
    document.execCommand("insertHTML", false, "<hr>");
  };

  const bulletListHandle = () => {
    setUlList(!ulList);
    document.execCommand("insertUnorderedList", false, null);
  };

  const numberListHandle = () => {
    setOlList(!olList);
    document.execCommand("insertorderedList", false, null);
  };

  const blockQuoteHandle = () => {
    setBlockQuote(!blockquote);
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
    setCode(!code);
    document.execCommand(
      "insertHTML",
      false,
      "<pre><code>Your code here</code></pre>"
    );
  };

  const deleteNote = () => {
    setBold(false);
    setItalic(false);
    setStrike(false);
    setHeading(false);
    setDividerHandle(false);
    setUlList(false);
    setOlList(false);
    setBlockQuote(false);
    setCode(false);

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

  const boldbuttonClass = ` text-[#757575] p-2 ${bold ? "active" : ""}`;
  const italicbuttonClass = ` text-[#757575] p-2  ${italic ? "active" : ""}`;
  const strikeButtonClass = ` text-[#757575] p-2  ${strike ? "active" : ""}`;
  const headingButtonClass = ` text-[#757575] p-2 ${heading ? "active" : ""}`;
  const divideButtonClass = ` text-[#757575] p-2 ${divider ? "active" : ""}`;
  const ulButtonClass = ` text-[#757575] p-2 ${ulList ? "active" : ""}`;
  const olButtonClass = ` text-[#757575] p-2  ${olList ? "active" : ""}`;
  const blockButtonClass = ` text-[#757575] p-2 ${blockquote ? "active" : ""}`;
  const codeButtonClass = ` text-[#757575] p-2 ${code ? "active" : ""}`;

  return (
    <>
      <div className="flex lg:flex-row flex-col">
        <div className="lg:w-2/12 w-full">
          <p className="my-8 font-bold underline text-2xl flex items-start justify-center">
            NoteWorthy
          </p>
        </div>
        <div className="lg:w-8/12 w-full">
          <ClearContext.Provider value={{ clearData }}>
            <div className="w-full mb-8">
              <Heading></Heading>
            </div>
            <div className="text-left">
              <button onClick={fontBoldHandle} className={boldbuttonClass}>
                <MdFormatBold className="text-2xl" />
              </button>
              <button className={italicbuttonClass} onClick={fontItalicHandle}>
                <MdFormatItalic className="text-2xl" />
              </button>
              <button className={strikeButtonClass} onClick={fontStrikeThrough}>
                <MdStrikethroughS className="text-2xl" />
              </button>

              <button onClick={fontLarge} className={headingButtonClass}>
                <LuHeading2 className="text-2xl relative " />
              </button>
              <button onClick={dividerHandle} className={divideButtonClass}>
                <RxDividerHorizontal className="text-2xl  relative " />
              </button>
              <button onClick={bulletListHandle} className={ulButtonClass}>
                <PiListBullets className="text-2xl relative " />
              </button>
              <button onClick={numberListHandle} className={olButtonClass}>
                <MdOutlineFormatListNumbered className="text-2xl relative " />
              </button>
              <button onClick={blockQuoteHandle} className={blockButtonClass}>
                <BsBlockquoteLeft className="text-2xl relative " />
              </button>
              <button onClick={codeHandle} className={codeButtonClass}>
                <FaCode className="text-2xl relative " />
              </button>
              <button onClick={deleteNote} className="mx-2 text-[#757575]">
                <MdDelete className="text-2xl" />
              </button>
              <button onClick={downloadNote} className="mx-2 text-[#757575]">
                <IoMdDownload className="text-2xl" />
              </button>
            </div>
            <Description ref={descriptionRef}></Description>
          </ClearContext.Provider>
        </div>
      </div>
    </>
  );
};

export default Pad;
