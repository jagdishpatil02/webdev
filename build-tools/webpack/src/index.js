import generateJoke from "./generateJoke";
import "./styles/main.scss";

import profilepic from "./assets/jag.jpg";

const profilePic = document.getElementById("profilePic");
profilePic.src = profilepic;
console.log(generateJoke());
