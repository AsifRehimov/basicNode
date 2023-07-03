const express = require('express');
const { getAllUserd,getUserById, putUsers, createUsers, createUserget, deleteUser } = require('../controllers/user.controller');
const router = express.Router();

router.get('/', getAllUserd);
router.get('/edit:id', getUserById);
router.get('/create_user', createUserget);
router.put('/update', putUsers);
router.post('/create', createUsers);
router.delete('/delete:id', deleteUser);


module.exports = router;
