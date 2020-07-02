const express = require('express')
const mainRoute = require('./routes/mainRoute')
const app = express()
const PORT = 3000

app.set("view engine","ejs")
app.use(express.urlencoded({express:true}))
app.use('/', mainRoute)

app.listen(PORT , () => {
    console.log("listening to PORT", PORT)
})