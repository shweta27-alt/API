const express = require('express')
const app = express();
const cors = require('cors')

app.use(
    cors({
      origin:[ "http://localhost:8081","http://localhost:8080"],
      methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
      credentials: true,
      sameSite: 'none'
    })
  );

app.get('/test',(req,res)=>{
    // console.log(req.query)
    // res.send("heyy")
    // res.render("test",{
    //     name: req.query.name
    // })

    console.log(req.query.name)
    res.json({message:req.query.name})

   
})

app.listen(5000)
