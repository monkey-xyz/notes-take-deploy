const notes = require('express').Router();
const fs = require('fs')
const { nanoid } = require('nanoid');

notes.get('/notes', (req, res) => {
    console.info(`${req.method} method received for notes`);

    fs.readFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
});

notes.post('/notes', (req,res) => {
    const {noteTitle, noteText} = req.body;

    if (noteTitle && noteText) {
        const addNote = {
            noteTitle,
            noteText,
            id: nanoid(),
        }

        fs.readFile('./db/db.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
            } else {
                let noteData = JSON.parse(data);
                noteData.push(addNote);
                fs.writeFile('./db/db.json', noteData);
            }
        })
        res.json(`Your note has been added, ${noteTitle}`);
    } else {
        res.error(`Your note ${noteTitle} has failed to be added.`)
    }
});

//notes.delete('/api/notes', (req,res) => {

//});

module.exports = notes;