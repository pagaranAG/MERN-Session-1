const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
   // res.send('Hello World! subasaskrayb 2 my yutube chanil');
    res.json({ 
        message: 'Hello World! subasaskrayb 2 my yutube chanil',
        name: 'Subas',
        age: 30,
        hobbies: ['coding', 'gaming', 'traveling']
    });
});

module.exports = router;