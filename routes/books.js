const express = require('express');
const router = express.Router();
const data = require('../data/books.json');

router.get('/', (req, res) =>{
    res.status(200).json(data);
});

router.get('/:bookId', (req, res) =>{
    const requestedBookId = req.params.bookId; // "1"
    const book = data.books.filter(bookInData => { //1
       if(bookInData.id.toString() === requestedBookId) {
            return bookInData;
       }
    }); 
    
    
    res.status(200).json(book);
});

module.exports = router;


