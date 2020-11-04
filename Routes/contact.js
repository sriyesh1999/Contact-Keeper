const express = require('express');
const router=express.Router();
//@route  GET api/contacts
//@desc get all users contacts
//@access Private
router.get('/',(req,res)=>{
    res.send('get a users contac')
});
//@route  POST api/contacts
//@desc add a new contacts
//@access Private
router.get('/',(req,res)=>{
    res.send('add contacts')
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