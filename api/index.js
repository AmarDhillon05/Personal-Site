const express = require("express")
const fs = require('fs')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {res.send("Hello World")}) //This for testing

app.get("/password", (req, res) => {
  res.send(JSON.stringify({"password" : process.env.PASSWORD}))
})

app.get("/read", (req, res) => {
  fs.readFile("projects.json", "utf-8", (err, data) => {
    if(err){res.status(500)}
    else{res.send(data)}
  })
})

app.post("/edit", (req, res) => {
  try{
    const id = req.body.id
    fs.readFile("projects.json", "utf-8", (err, data) => {
      if(err){throw err}
      let new_json = req.body
      delete new_json["id"]
      let json = JSON.parse(data)
      json[id] = new_json
      fs.writeFile("projects.json", JSON.stringify(json), (err) => {
        if(err){throw err}
        else{res.status(200)}
      })
    })
  } catch(err){
    res.status(500)
  }
})

app.post("/delete", (req, res) => {
  try{
    const id_to_remove = req.body.id
    fs.readFile("projects.json", "utf-8", (err, data) => {
      if(err){throw err}
      let json = JSON.parse(data)
      if(Object.keys(json).includes(id_to_remove)){
        delete json[id_to_remove]
        fs.writeFile("projects.json", JSON.stringify(json), (err) => {
          if(err){throw err}
          else{res.status(200)}
        })
      }
    })
  }
  catch(err){
    res.status(500)
  }
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log("Listening on port " + "http://localhost:" + PORT + "/")
})

module.exports = app