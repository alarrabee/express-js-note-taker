Boot Camp Module 11 Challenge

# Description
This is the week 11 Module Challenge for the U of M Coding Bootcamp

# Express.js: Note Taker
The challenge is to modify starter code to create an application called Note Taker that can be used to write and save notes. This application uses an Express.js back end and will save and retrieve note data from a JSON file. A bonus challenge was presented to add functionality that would enable the user to delete a note. The application will then be deployed to Render.

## User Story
```md
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## Acceptance Criteria
```md
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a "Save Note" button and a "Clear Form" button appear in the navigation at the top of the page
WHEN I click on the Save button
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes and the buttons in the navigation disappear
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column and a "New Note" button appears in the navigation
WHEN I click on the "New Note" button in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column and the button disappears
```

## Application Screenshot
### Home Page
![image](https://github.com/alarrabee/express-js-note-taker/assets/149320486/6f5667a6-85a8-4253-a9f5-63ae379d5166)

### Note Taker Page
![image](https://github.com/alarrabee/express-js-note-taker/assets/149320486/0f7aacc9-c446-4b31-8f0c-3c8c1b7f5be2)


## Installation Instructions for Personal Use without Render
Prerequisites
- Node.js
- npm

1. Clone the repository
   ```bash
   https://github.com/alarrabee/express-js-note-taker.git
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Invoke application
   ```bash
   node server.js
   ```
4. Open application in browser with the port number your server is listening with.
      ```bash
   localhost:{port}
   ```   
## Usage Information
1. Click **Get Started** on the landing page to be directed to the notes page.
2. Enter the note title and note text in the empty text fields.
3. The **Save Note** and **Clear Form** buttons will appear in the top right corner.
4. Click **Clear Form** to clear the text fields or **Save Note** to save the note.
5. Saved notes will appear in the left-hand column.
6. Click the note to view the note content.
7. Click the trash can icon on each note to delete it.
