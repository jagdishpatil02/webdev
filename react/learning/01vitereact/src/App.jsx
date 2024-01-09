import HelloWorld, { message, message1 } from "./Hello.jsx";
import Person1 from "./Person1.jsx";
import Person2 from "./Person2.jsx";
import ProfileCard from "./ProfileCard.jsx";
import { Provider } from "./context/context.jsx";
import hoc from "./hoc/hoc.jsx";
import { Hooks } from "./hooks.jsx";
// import React from 'react'
const username = "jagdish";

const config = { color: "red" };
// const createElement = React.createElement('a', {href: 'https://www.jagdish.vercel.app', target:"_blank" }, 'go to website')
function App() {
  let data = [
    {
      name: "siri",
    },
    {
      name: "cortana",
    },
    {
      name: "google assistant",
    },
  ];
  return (
    <>
      <Provider>
        <HelloWorld /> {username} {message} {message1}
        <br />
        {config.color}
        <br />
        <input type="number" style={{ color: "red", fontSize: "1.6rem" }} />
        {/* props usage */}
        <div>
          <h1>Personal digital assistant</h1>
        </div>
        <button onClick={() => addAssistant()}>Add Assistant</button>
        {data.map((name, index) => (
          <ProfileCard assistant={name} key={index} />
        ))}
        <Hooks />
        <Person1 />
        <Person2 />
      </Provider>
    </>
  );
}

export default App;
