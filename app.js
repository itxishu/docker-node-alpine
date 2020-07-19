// app.js
const express = require('express')
const app = express()

app.get('/', function(req, res){
  res.send('hello world')
})

app.listen(3000,()=>{
  console.log('本地监听：3000')
})
