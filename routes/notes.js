const notes = require('express').Router();
const fs = require('fs')
const { nanoid } = require('nanoid');
const path = require('path')

notes.get('/notes', (req, res) => {
    console.info(`${req.method} method received for notes`);

    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const noteData = JSON.parse(data);
            console.log(data);
            return res.json(noteData);
        }
    }
)});

notes.post('/notes', (req,res) => {
    const {title, text} = req.body;

    if (title && text) {
        const addNote = {
            title,
            text,
            id: nanoid(),
        }

        fs.readFile('./db/db.json', 'utf8', (err) => {
            if (err) {
                console.error(err);
            } else { 
                fs.writeFile('./db/db.json', noteData, (err) => {
                    if (err) {
                        console.error(err);
                    } else {
                        noteData.push(JSON.stringify(addNote));
                        fs.readFileSync('./db/db.json', 'utf8');
                    }
                })
            }
        });
        res.json(`Your note has been added, ${title}`);
    } else {
        res.json(`Your note ${title} has failed to be added.`);
    }
});

//notes.delete('/api/notes', (req,res) => {

//});

module.exports = notes;