const routerauth=require('express').Router()
const auth=require('../Controller/authController.js')

routerauth.post('/Signup', auth.Signin );
routerauth.post('/Login', auth.Login );

module.exports = routerauth