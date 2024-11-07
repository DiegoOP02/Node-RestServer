const { respose,request } = require('express');


const usuarioGet = (req = request, res = respose) => {
    const {q,nombre,apikey} = req.query;
    res.status(200).json({
       msg: 'GET API desde el controlador',
       q,
       nombre,
       apikey
    });
  }

  const usuarioPost = (req, res = respose) => {
    const {nombre,edad} = req.body;
    res.json({
       msg: 'POST API desde el controlador',
       nombre,
       edad
    });
  }

  const usuarioPut = (req, res = respose) => {

    const {id} = req.params; 

    res.json({
       msg: 'PUT API desde el controlador',
       id
    });
  }

  const usuarioPatch = (req, res = respose) => {

    res.json({
       msg: 'PATCH API desde el controlador'
    });
  }
  
  const usuarioDelete = (req, res = respose) => {

    res.json({
       msg: 'DELTE API desde el controlador'
    });
  }


  module.exports = {
    usuarioGet,
    usuarioPost,
    usuarioPut,
    usuarioPatch,
    usuarioDelete
  }