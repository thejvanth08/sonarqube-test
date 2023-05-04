const express = require('express');
const multer = require('multer');
const xml2js = require('xml2js');
const path = require('path');

const app = express();
const upload = multer();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/convert', upload.single('xmlFile'), (req, res) => {
  const xml = req.file.buffer.toString();

  xml2js.parseString(xml, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error converting XML to JSON');
    } else {
      const json = JSON.stringify(result);
      res.set('Content-Type', 'application/json');
      res.send(json);
    }
  });
});

app.listen(3000, () => console.log('Server started on port 3000'));
