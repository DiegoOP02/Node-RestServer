const {Router} = require('express');

const {
   usuarioGet,
   usuarioPut,
   usuarioPost,
   usuarioPatch,
   usuarioDelete
} = require('../controllers/usuarios')

const router = Router();

//endpoint 
router.get('/', usuarioGet); 

router.post('/', usuarioPost); 

router.put('/:id', usuarioPut); 

router.patch('/', usuarioPatch); 

router.delete('/', usuarioDelete); 



 module.exports = router;