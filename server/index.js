const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors')


mongoose.connect('mongodb://localhost:27017/game-users')
.then(()=>{
    console.log("Database connected successfully....")
})
.catch((err)=>{
    console.log(err)
})

const app = express()

app.use(cors());
app.use(express.json())

//Endpoint for Register

app.post('register',(req,res)=>{
    let user=req.body;
    console.log(user);

    bcrypt.genSalt(10,(err,salt)=>{
        if(!err){
            bcrypt.hash(user.password,salt,async(err,hashp)=>{
                user.password=hashp;
                try{
                    let doc = await userModel.create(user)
                    res.send({message:"Register Successful"})
                }
                catch(err){
                    console.log(err)
                    res.send({message:"Some Problem"})
                }
            })
        }
    })
})


// Endpoint for Login

app.post('/login',async (req,res)=>{
    let userCred=req.body;

    try{
        let user=await userModel.findOne({number:userCred.number})

        if (user !== null){
            bcrypt.compare(userCred.password,user.password,(err,success)=>{
                if(success){
                    res.send({message:"Login Successful",user:user})
                }
                else{
                    res.send({ message: "Incorrect Password" });
                }
            })
        }
        else{
            res.status(404).send({ message: "User Not Found" });
        }
    }
    catch(err){
        console.log(err)
        res.status(500).send({ message: "Some Problem!" });
    }

})


app.listen(8000,()=>{
    console.log("Server is running on port 8000")
})