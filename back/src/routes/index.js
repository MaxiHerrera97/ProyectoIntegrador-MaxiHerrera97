/*Controllers*/
const login = require ('../controllers/login');
const postFav = require ('../controllers/postFav');
const postUser = require ('../controllers/postUser');
const deleteFav = require ('../controllers/deleteFav');
const {getCharById} = require ('../controllers/getCharById');

/*Express config*/
const express = require ('express');
const router = express.Router();

/*Routes*/
router.get('/login',login);
router.post('/fav', postFav);
router.post('/login',postUser);
router.delete('/fav/:id', deleteFav);
router.get('/character/:id', getCharById);





module.exports = {
    router
}