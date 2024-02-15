import React, { useEffect, useRef, useState } from "react";

export const Heading = () => {
  const [heading, setHeading] = useState("Title");

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
    <div>
      {" "}
      <div
        ref={headingRef}
        contentEditable="true"
        className="w-full h-[2vh]  p-2 text-left outline-0 text-2xl"
        onInput={handleHeading}
        dangerouslySetInnerHTML={{ __html: heading }}
      ></div>
    </div>
  );
};
