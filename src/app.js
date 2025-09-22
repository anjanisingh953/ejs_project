const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'));

app.set('view engine','ejs');
// app.set('views','./public/views')



app.get('/test',(req,res)=>{
  res.status(200).json({msg:'Endpoint is working...'})  
});

app.get('/home',(req,res)=>{
    res.render("home")
})

app.get('/about',(req,res)=>{
    const items = ["apple","banana","mango","grapes"];
    const users = [
        {name:'Mohit', age:20, city:'Indore'},
        {name:'Sumit', age:25, city:'Dewas'},
        {name:'Rohit', age:30, city:'Bhopal'},
    ]
    res.render("about",{
        title:'About page',
        message:'welcome to about page',
        items,
        users 
    })
})

app.get('/form',(req,res)=>{
    res.render("form",{message:null});
})

app.post('/submit',(req,res)=>{
   const name = req.body.myname;
   const message = `Hello ${name}, you submitted the form`

    res.render('form',{message:message});
})

module.exports = app;
