//Import Express
const express = require('express');
//Create a router
const router = express.Router();

//No need to mention users
router.get('/',(req,res)=>{
    res.send('User List')
})

router.get('/new',(req,res)=>{
    res.send('User new Form')
})

router.post('/',(req,res)=>{
    res.send('Create User');
})

router.route("/:id")
.get((req,res)=>{
    console.log(req.user)
    res.send(`Get User with id: ${req.params.id} `)
})
.put((req,res)=>{
    res.send(`Update User with id: ${req.params.id}`)
})
.delete((req,res)=>{
    res.send(`Delete User with ID: ${req.params.id}`)
})

//to access users anywhere

const users = [{name:"Yadhu"},{name:"Akshay"}];
router.param("id",(req,res,next,id)=>{
    req.user = users[id]
    next()
})

module.exports = router; 