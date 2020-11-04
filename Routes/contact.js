const express = require('express');
const router=express.Router();
const User =require('./Models/Users')
const bcrypt = require('bcryptjs')
const jwt= require('jsonwebtoken')
const config= require('config')
const {check,validationResult} = require('express-validator')
const auth = require('../Middleware/auth')
const Contact = require('./Models/Contact')
//@route  GET api/contacts
//@desc get all users contacts
//@access Private
router.get('/',auth,async (req,res)=>{
    try{
        const contacts = await Contact.find({user:req.user.id}).sort({date:-1})
        res.json(contacts)
    }
    catch(err){
        console.error(err.message)
        res.status(500).send('Server Error')
    }
    
});
//@route  POST api/contacts
//@desc add a new contacts
//@access Private
router.post('/',[auth,[
    check('name', 'name is required').not().isEmpty()
]],async (req,res)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    const {name,email,phone,type}=req.body;
    try{
        const newContact=new Contact({
            name,email,phone,type,user:req.user.id
        })


        const contact=await newContact.save()
        res.json(contact)
    }
    catch(err)
    {
        console.error(err)
        res.status(500).send('Server Error')
    }

});

//@route  PUT api/contacts/:id
//@desc edit a contacts
//@access Private
router.put('/:id',(req,res)=>{
    res.send('edit a conatct')
});

//@route  DELETE api/contacts/:id
//@desc delete conatct
//@access Private
router.delete('/',(req,res)=>{
    res.send('delete contact')
});


module.exports = router;