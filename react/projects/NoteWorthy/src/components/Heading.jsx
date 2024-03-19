import { useContext, useEffect, useRef, useState } from "react";
import { ClearContext } from "../context/ClearContext";

export const Heading = () => {
  const { clearData } = useContext(ClearContext);

  const [heading, setHeading] = useState("Title");
  useEffect(() => {
    setHeading("Title");
  }, [clearData]);

  const headingRef = useRef();
  useEffect(() => {
    // heading
    const headigDiv = headingRef.current;
    const headingRange = document.createRange();
    const headingSel = window.getSelection();
    headingRange.selectNodeContents(headigDiv);
    headingRange.collapse(false);
    headingSel.removeAllRanges();
    headingSel.addRange(headingRange);
  }, [heading]);

  useEffect(() => {
    let getheading = window.localStorage.getItem("heading");
    if (getheading) {
      setHeading(getheading);
    }
  }, []);

  const handleHeading = (e) => {
    setHeading((prevValue) => {
      if (prevValue == "Title") {
        setHeading("");
      } else {
        setHeading(e.target.innerHTML);
      }
    });
    window.localStorage.setItem("heading", e.target.innerHTML);
  };

  return (
    <div
      ref={headingRef}
      contentEditable="true"
      className="w-full h-[2vh] text-left outline-0 text-2xl ml-2"
      onInput={handleHeading}
      dangerouslySetInnerHTML={{ __html: heading }}
    ></div>
  );
};
