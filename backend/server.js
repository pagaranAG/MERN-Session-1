require('dotenv').config();
 
const express = require('express');
const notesRouter = require('./routes/notes'); 
const app = express();

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use('/api/notes', notesRouter); 

 

app.listen(process.env.PORT, () => {
        console.log('Server is running on port', process.env.PORT);
    });

