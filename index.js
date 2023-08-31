import ffmpeg from "fluent-ffmpeg";
import ytdl from "ytdl-core";
import { PassThrough } from "stream";
import ffmpegPath from "@ffmpeg-installer/ffmpeg";

ffmpeg.setFfmpegPath(ffmpegPath.path);

const ytAudio = (url) => {
  const passThroughStream = new PassThrough();
  const videoStream = ytdl(url, { filter: "audioonly" });
  const ffmpegProcess = ffmpeg(videoStream).toFormat("mp3");
  ffmpegProcess.pipe(passThroughStream);
  return passThroughStream;
};

export default ytAudio;
