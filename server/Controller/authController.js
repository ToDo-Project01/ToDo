const{users}=require('../Database/index.js')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {createUser}=require('./userController.js')


const generateToken = (id, name) => {
    const expiresIn = 60 * 60 * 24
    return jwt.sign({ id, name }, "process.env.ACCESS_TOKEN_SECRET", { expiresIn: expiresIn });
  };



  const Signin = async (req, res) => {
    const { name,lastName , email, password } = req.body;
    console.log('name',name);
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
   
      const newUser = {
       
        name,
        lastName,
         email,
         password :hashedPassword}
        
         createUser({ body: newUser }, res);
     } catch (error) {
      
       res.status(500).json({ error: 'Error' });
     }
   };



   const Login = async(req, res) => {b
    const{email,password}=req.body;
    try {
        const result= await users.findOne({ where :{email:email}})


        if(result ===null) res.send("email not found")
         else {
          const verif=result.dataValues.password
          const passwordMatch = await bcrypt.compare(password,verif)
          if(passwordMatch){

             const token=generateToken(result.dataValues.id,result.dataValues.email)  
             result.dataValues.token=token
            res.send(result.dataValues)
          }
          else{ 
            res.send("password wrong")
          }
          
      }
    
    }
    catch (error) {res.status(500).json(error)}
}

module.exports={Signin , Login}
