const express = require('express');
const ytdl = require('ytdl-core');
const ffmpeg = require('fluent-ffmpeg');
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
ffmpeg.setFfmpegPath(ffmpegPath);

const app = express();
const PORT = 4000;

app.use(express.static('src'))
app.use(express.urlencoded({ extended: true }));



app.get('/download', async (req, res) => {
  const { URL } = req.query;
  const info = await ytdl.getInfo(URL)
  // const audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
  // const bitrates = audioFormats.map(format => format.audioBitrate)
  const title = info.videoDetails.title

  res.header('Content-Disposition', `attachment; filename="${title}.mp3"`);
  res.header('Content-Type', 'audio/mpeg'); // for MP3

  const stream = ytdl(URL, { filter: format => format.audioBitrate === 128 })
  const processed = ffmpeg({ source: stream });

  // const pathToSave = process.cwd() + '/file.mp3'; // for saving in the local folder

  processed
    .audioCodec('libmp3lame')
    .toFormat('mp3')
    // .on('progress', info => console.log(`File size: ${info.targetSize} kilobytes.`))
    .on('end', () => console.log('File has been converted succesfully'))
    .on('error', err => console.log(`An error happened: ${err.message}`))
    .pipe(res, { end: true });
});

app.listen(PORT, () => {
  console.log(process.cwd())
  console.log(`Server is working on http://localhost:${PORT}`);
});