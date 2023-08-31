# yt-audio-extractor

A simple node package for extracting audio from youtube

```javascript
import extractAudio from "yt-audio-extractor";

app.get("/", (req, res) => {
  extractAudio("https://www.youtube.com/watch?v=dQw4w9WgXcQ").pipe(res);
});
```
