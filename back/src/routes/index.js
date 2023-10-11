/*Controllers*/
const {login} = require ('../controllers/login');
const {getCharById} = require ('../controllers/getCharById');
const {postFav, deleteFav} = require ('../controllers/handleFavorites');

/*Express config*/
const express = require ('express');
const router = express.Router();

/*Routes*/
router.get('/character/:id', getCharById);

router.get('/login',login);

router.post('/fav', postFav);

router.delete('/fav/:id', deleteFav);

module.exports = {
    router
}