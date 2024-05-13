const express = require('express'); //imports the express module
const app = express(); //sets up an instance of the express method

//sets up the PORT that will listen for incoming connections on the port specified by the PORT environment variable, falling back to port 3001 if the environment variable is not set.
const PORT = process.env.PORT || 3001;

//middleware for serving static files to the public without needing to define routes for each individual file
app.use(express.static('public'));

//middleware for posting to APIs
app.use(express.json()); //will parse incoming JSON requests and make that data available in the req.body
app.use(express.urlencoded({extended:true})); //will parse incoming URL-encoded requests and make the parsed data available in the req.body. useful for handling form submissions and other URL-encoded data without having to manually parse it.


//html route handlers for GET requests to the root URL ('/'), and the addnote URL ('/addnote') and sends the file located at the specified path to the client as the response.
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html'); //
});

app.get('/addnote', (req, res) => {
    res.sendFile(__dirname + '/public/notes.html');
});




//will start a server and begin listening for incoming connections on the specified port
app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`)
});