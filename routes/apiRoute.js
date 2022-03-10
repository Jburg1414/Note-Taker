const path = require('path');
const router = require('express').Router();

router.get('/api/notes', (req, res) => {
    console.log(req.body);
});

router.post('/api/notes', (req, res) => {
    console.log(req.body);
});

module.exports = router;