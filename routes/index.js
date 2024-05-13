//imports the Router module from express
const router = require('express').Router();

//imports the uniqid mudule from node.js
const uniqid = require('uniqid');


const fs = require('fs');

//api route handlers

//GET
router.get('/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        }
        else {
            res.json(JSON.parse(data));
        }
    });
});


//POST
router.post('/notes', (req, res) => {
    const newNoteObj = {
        id: uniqid(), //generates unique ids
        title: req.body.title,
        text: req.body.text,
    }
    console.log(newNoteObj);

    //For persistant data: read the file (so you have the latest version), and then write to it
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        }
        else {
            const parsedNotes = JSON.parse(data);
            parsedNotes.push(newNoteObj);
            const stringifyNotes = JSON.stringify(parsedNotes, '', (writeErr) => {
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
// router.delete('/notes/:id', (req, res) => {

// });


module.exports = router;
