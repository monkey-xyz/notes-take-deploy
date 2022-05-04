const notes = require('express').Router();
//const app = express();
//const uniqueID = require('');

notes.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, 'notes.html'))
);

module.exports = notes;