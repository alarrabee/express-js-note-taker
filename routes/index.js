//imports the Router module from express
const router = require('express').Router();

//imports the uniqid mudule from node.js
const uniqid = require('uniqid');

//imports file system module from node.js
const fs = require('fs');


//api route handlers for GET, POST and DELETE

//GET: when the request is made to the '/notes' endpoint, will read the contents of the 'db.json' file and send it back as the response in JSON format. 
router.get('/notes', (req, res) => {
    fs.readFile('../db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        }
        else {
            res.json(JSON.parse(data));
        }
    });
});


//POST: handles post requests to the '/notes' endpoint by adding a new note to a JSON file 
router.post('/notes', (req, res) => {
    const newNoteObj = {
        id: uniqid(), //generates unique ids
        title: req.body.title,
        text: req.body.text,
    }
    console.log(newNoteObj);

    //For persistant data: read the file (so you have the latest version), and then write to it
    fs.readFile('../db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        }
        else {
            const parsedNotes = JSON.parse(data);
            parsedNotes.push(newNoteObj);
            const stringifyNotes = JSON.stringify(parsedNotes, '', 4);
            fs.writeFile('./db/db.json', stringifyNotes, (writeErr) => {
                if (writeErr) {
                    console.error(writeErr);
                }
                else {
                    console.log('File Written!');
                }
            })
        }
    })
    res.json(`Note ${req.body.title} was added!`);
});



//DELETE
router.delete('/notes/:id', (req, res) => {
    const noteId = req.params.id;
    let data = fs.readFileSync('./db/db.json', 'utf8');
    let notes = JSON.parse(data);

    const filteredNotes = notes.filter(function(note) {
        return note.id !== noteId;
    });

    if (notes.length === filteredNotes.length) {
        res.status(404).json({error: 'Note not found'});
        return;
    }

    fs.writeFileSync('./db/db.json', stringify(filteredNotes, null, 4));

    console.log(`Note deleted!`);
    res.json({message: `Note ${noteId} deleted successfully`});
});


module.exports = router;
