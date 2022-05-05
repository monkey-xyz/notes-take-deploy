const res = require('express/lib/response');

const notes = require('express').Router();
//const app = express();
//const uniqueID = require('');

notes.get('/api/notes', (req, res) => {
    console.info(`${req.method} method received for notes.`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
});

//notes.post('/api/notes', (req,res) => {
    //const {}
//});

module.exports = notes;