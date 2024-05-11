const routerauth=require('express').Router()
const auth=require('../Controller/authController.js')

routerauth.post('/signup', auth.Signin );
routerauth.post('/login', auth.Login );

module.exports = routerauth