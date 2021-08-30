const express = require('express');
const ytdl = require('ytdl-core');
const app = express();
const PORT = 4000;

app.use(express.static('src'))
app.use(express.urlencoded({ extended: true }));

app.get('/download', async (req, res) => {
  const { URL } = req.query;
  const info = await ytdl.getInfo(URL)
  const title = info.videoDetails.title

  res.header('Content-Disposition', `attachment; filename="${title}.mp4"`);
  // res.header('Content-type', 'audio/mpeg'); // for MP3

  ytdl(URL, { filter: format => format.audioBitrate === 128 }).pipe(res);
});

app.listen(PORT, () => {
  console.log(__dirname)
  console.log(`Server is working on port ${PORT}`);
});