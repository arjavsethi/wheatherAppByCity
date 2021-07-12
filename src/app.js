const express = require("express");
const app = express();

const PORT = 8000;


app.use(express.static('public'));

app.get('',(req,res)=>{
    res.render("index.js");
});
app.get('/about',(req,res)=>{
    res.send('hello world about');
});
app.get('/weather',(req,res)=>{
    res.send('hello world weather about');
});
app.get('*',(req,res)=>{
    res.send('404 error');
});






app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
});