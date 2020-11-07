const express = require('express');
const { connect } = require('./routes/auth');
const path =require('path');
const connectDB=require('./config/db')
const app = express();
connectDB();
//Middelware

app.use(express.json({extended: false}))



//define Routes
app.use('/api/users',require('./routes/users'))
app.use('/api/contact',require('./routes/contact'))
app.use('/api/auth',require('./routes/auth'))
const PORT=process.env.PORT ||1805;
if(process.env.NODE_ENV==='production'){
    app.use(express.static('client/build'))
    app.get('*',(req,res)=>res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    )
}
app.listen(PORT,()=>console.log(PORT))