const notes = require('express').Router();
const fs = require('fs')
const { nanoid } = require('nanoid');

notes.get('/notes', (req, res) => {
    console.info(`${req.method} method received for notes`);

    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const noteData = JSON.parse(data);
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

        fs.readFile('./db/db.json', 'utf8', (err, data) => {
            
            if (err) {
                console.error(err);
            } else {
                const noteData = JSON.parse(data);

                noteData.push(addNote);

                fs.writeFile('./db/db.json', JSON.stringify(noteData, null, 4), (err) => {
                    if (err) {
                        console.error(err);
                    } else {
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

// Incomplete Delete function, will come back in future to finish this.

//notes.delete('/notes/:id', (req,res) => {

//});

module.exports = notes;