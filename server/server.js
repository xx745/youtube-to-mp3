const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();
const PORT = 4000;

app.use(express.static('src'))

app.use(cors())

app.get('/download', (req, res) => {
    const { URL } = req.query;
    
    res.header('Content-Disposition', 'attachment; filename="video.mp4"');
    
    ytdl(URL, { format: 'mp3' }).pipe(res);
});

app.listen(PORT, () => {
    console.log(`Server is working on port ${PORT}`);
});