const express = require('express');
const router = express.Router();


//* index
router.get('/', (req, res) => {
    res.json('lista dei post');
});

//* show
router.get('/:id', (req, res) => {
    res.json(`dettagli del post ${req.params.id}`);
});

//* create
router.post('/', (req, res) => {
    res.json('creazione nuovo post');
});

//* update
router.put('/:id', (req, res) => {
    res.json(`modifica totale del post ${req.params.id}`);
});

//* delete
router.delete('/:id', (req, res) => {
    res.json(`eliminazione del post ${req.params.id}`);
});

module.exports = router;