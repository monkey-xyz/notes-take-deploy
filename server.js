const express = require('express');
const path = require('path');
const notesRoute = require('./routes/notes.js');
const noteid = require('nanoid');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// All of the important api routing is located in this route.
app.use('/api', notesRoute);

app.use(express.static('public'));

app.get('/', (req, res) =>
   res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
   res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.listen(PORT, () => 
   console.log(`🥂 Cheers! Your app is now live at ${PORT} 🥂`)
);
