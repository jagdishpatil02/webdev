import {
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { ClearContext } from "../context/ClearContext";

export const Description = forwardRef((props, ref) => {
  const [content, setContent] = useState(" ");
  const { clearData } = useContext(ClearContext);
  const noteRef = useRef(null);

  // Expose the div reference to the parent component
  useImperativeHandle(ref, () => ({
    getDivContent: () => {
      console.log("noteRef.current.innerText)", noteRef.current.innerText);
      return noteRef.current.innerText;
    },
  }));

  useEffect(() => {
    setContent(" ");
  }, [clearData]);

  useEffect(() => {
    let getContent = window.localStorage.getItem("content");
    if (getContent) {
      setContent(getContent);
    }
  }, []);

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

  const handleNote = (e) => {
    setContent(e.target.innerHTML);
    window.localStorage.setItem("content", e.target.innerHTML);
  };
  return (
    <div
      ref={noteRef}
      contentEditable="true"
      className=" w-full h-[70vh]  text-left outline-0 mt-4 ml-3.5"
      onInput={handleNote}
      dangerouslySetInnerHTML={{ __html: content }}
    ></div>
  );
});

Description.displayName = "Description";
