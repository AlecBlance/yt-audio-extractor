# AudioTube

A simple node package for extracting audio from youtube

```javascript
import audiotube from "audiotube";

app.get("/", (req, res) => {
  audiotube("https://www.youtube.com/watch?v=v8FZLOEzmZ4").pipe(res);
});
```
