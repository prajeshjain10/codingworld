const express = require('express');
const app = express();
const port = process.env.PORT || 8080;


app.get('/',(req, res)=>{
    res.sendFile("/index.html", {root:__dirname});
});

app.get('/about',(req, res)=>{
    res.sendFile("/about.html", {root:__dirname});
})

app.get('/services',(req, res)=>{
    res.sendFile("/services.html", {root:__dirname});
})

app.get('/contact',(req, res)=>{
    res.sendFile("/contact.html", {root:__dirname});
})

app.listen(port);
console.log('Server started at http://localhost:' + port);