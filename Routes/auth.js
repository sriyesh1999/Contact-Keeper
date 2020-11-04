const express = require('express');
const router=express.Router();
//@route  GET api/auth
//@desc get logged in user
//@access Private   
router.get('/',(req,res)=>{
    res.send('get a logged in user')
});
//@route  POSt api/auth
//@desc auth user and get token
//@access public
router.post('/',(req,res)=>{
    res.send('log in user')
});

module.exports = router;