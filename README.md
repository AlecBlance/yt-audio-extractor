# yt-audio-extractor

A simple node package for extracting audio from youtube

### Getting started

Install using npm

```bash
npm i yt-audio-extractor
```

### Usage

```javascript
import extractAudio from "yt-audio-extractor";

app.get("/", (req, res) => {
  extractAudio("https://www.youtube.com/watch?v=dQw4w9WgXcQ").pipe(res);
});
```
