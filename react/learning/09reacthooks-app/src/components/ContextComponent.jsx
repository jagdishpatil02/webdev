import { useContext } from "react";
import { ThemeContext } from "../App";

export default function ContextComponent() {
  const darkTheme = useContext(ThemeContext);

  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#ccc",
    color: darkTheme ? "#ccc" : "#333",
    padding: "3rem",
    margin: "2rem",
  };
  return <div style={themeStyles}>Function theme</div>;
}
