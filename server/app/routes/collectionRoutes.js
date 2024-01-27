const { Router } = require("express");
const multer = require('multer');
const { index, create } = require("../controllers/collectionController");

const collectionRouter = Router();
const upload = multer({ storage: multer.memoryStorage() });

collectionRouter.get('/collections', index);
collectionRouter.post('/collection/create', upload.single('image'), create);

module.exports = collectionRouter;