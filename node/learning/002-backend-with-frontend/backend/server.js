import express from "express";

const app = express();
const jokes = [
  {
    id: 1,
    title: "Two antennas met on a roof",
    content:
      "They fell in love and got married. The wedding wasn't much, but the reception was excellent!",
  },
  {
    id: 2,
    title: "Why don't scientists trust atoms?",
    content: "Because they make up everything!",
  },
  {
    id: 3,
    title: "Parallel lines have so much in common",
    content: "It’s a shame they’ll never meet.",
  },
  {
    id: 4,
    title: "I told my wife she was drawing her eyebrows too high",
    content: "She looked surprised.",
  },
  {
    id: 5,
    title: "Why did the scarecrow win an award?",
    content: "Because he was outstanding in his field!",
  },
];

app.get("/api/jokes", (req, res) => {
  res.send(jokes);
});

app.get("/", (req, res) => {
  res.send("Server is ready");
});

const port = 3000;

app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
