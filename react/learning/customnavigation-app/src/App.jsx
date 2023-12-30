import "./App.css";
import { Button } from "./components/button";
function App() {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <>
      <div>
        <Button className="mb-5" primary onClick={handleClick}>
          Click me
        </Button>
      </div>
      <div>
        <Button secondary>Hello</Button>
      </div>
      <div>
        <Button warning>Hello</Button>
      </div>
    </>
  );
}

export default App;
