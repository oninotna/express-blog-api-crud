const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController.js');
const checkId = require('../middlewares/postNotFound.js');

//* index
router.get('/', postController.index);

//* show
router.get('/:id', [checkId, postController.show]);

//* store
router.post('/', postController.store);

//* update
router.put('/:id', postController.update);

//* modify
router.patch('/:id', postController.modify);

//* delete
router.delete('/:id', postController.destroy);

module.exports = router;