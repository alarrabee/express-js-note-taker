const router = require('express').Router(); //imports the Router module from express
const path = require('path'); //imports built in node.js path to manipluate file paths

//holds the absolute path to the db.json file, regardless of the operating system, by combining the directory name of the current module (__dirname) with the relative path to the db.json file.
const filePath = path.join(__dirname, '../db/db.json');
//imports the uniqid mudule from node.js
// const uniqid = require('uniqid');


const fs = require('fs'); //imports file system module from node.js


//api route handlers for GET, POST and DELETE
    //GET: when the request is made to the '/notes' endpoint, will read the contents of the 'db.json' file and send it back as the response in JSON format. 
router.get('/notes', (req, res) => {
    
    fs.readFile(filePath, 'utf8', (err, data) => {
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
    const timeStamp = new Date().getTime();
    const newNoteObj = {
        id: `note_${timeStamp}`,
        title: req.body.title,
        text: req.body.text,
    }
    console.log(newNoteObj);

    //for persistant data: reads the file to obtain the latest version, and then writes to it
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        }
        else {
            const parsedNotes = JSON.parse(data);
            parsedNotes.push(newNoteObj);
            const stringifyNotes = JSON.stringify(parsedNotes, '', 4);
            fs.writeFile(filePath, stringifyNotes, (writeErr) => {
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
    let data = fs.readFileSync(filePath, 'utf8');
    let notes = JSON.parse(data);

    const filteredNotes = notes.filter(function(note) {
        return note.id !== noteId;
    });

    if (notes.length === filteredNotes.length) {
        res.status(404).json({error: 'Note not found'});
        return;
    }

    fs.writeFileSync(filePath, JSON.stringify(filteredNotes, null, 4));

    console.log(`Note deleted!`);
    res.json({message: `Note ${noteId} deleted successfully`});
});


module.exports = router;
