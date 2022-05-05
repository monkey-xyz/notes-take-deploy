const express = require('express');
const path = require('path');
const fs = require('fs');
const notes = require('./routes/notes');
const noteid = require('shortid');

const app = express();
const PORT = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.use('/api', notes);

app.get('/', (req, res) =>
   res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
   res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.listen(PORT, () => console.log(`App now live on port ${PORT}`));
