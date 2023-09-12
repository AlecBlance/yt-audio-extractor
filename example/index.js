import extractAudio from "../index.js";
import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    extractAudio("https://www.youtube.com/watch?v=dQw4w9WgXcQ").pipe(res);
  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }
});

server.listen(3001, () => {
  console.log(`Server is listening on port ${3001}`);
});
