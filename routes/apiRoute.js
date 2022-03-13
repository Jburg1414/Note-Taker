const fs = require("fs");('path');
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');

router.get('/api/notes', (req, res) => {
    let results = fs.readFileSync("db/db.json");
    results = JSON.parse(results);
    res.json(results);
});

router.post('/api/notes', (req, res) => {
    let newNote = req.body;
    let notes = fs.readFileSync("db/db.json");
    newNote.id = uuidv4();
    notes = JSON.parse(notes);
    notes.push(newNote);
    fs.writeFileSync("db/db.json", JSON.stringify(notes));
    res.json(notes);
});

router.delete('/api/notes/:id', (req, res) => {
    let notes = fs.readFileSync("db/db.json");
    let notesId = req.params.id;
    notes = JSON.parse(notes);
    let entireNote = notes.filter(note => note.id !== notesId);
    fs.writeFileSync("db/db.json", JSON.stringify(entireNote));
    res.json(entireNote);
});

module.exports = router;