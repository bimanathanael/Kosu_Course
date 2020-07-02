const express = require('express')
const app = require('express')()
const mainRoute = require('./routes/mainRoute')
const http = require('http')
const path = require('path')
const server = require('http').createServer(app);
const io = require('socket.io')(server);


const PORT = 3000;


app.set("view engine","ejs")
app.use(express.static(path.join(__dirname, '/')))
app.use(express.urlencoded({express:false}))

io.on('connection', socket => {
    socket.emit('message','welcome to chatRoom')

    socket.broadcast.emit('message', "A user has join the chat")
    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
    });
    
    socket.on('disconnect', () => {
        io.emit('message',"a User has left the chat")
    })

})
app.use('/', mainRoute)


server.listen(PORT , () => {
    console.log("listening to PORT", PORT)
})

module.exports = io