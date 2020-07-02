const express = require(`express`)
const routes = require(`./routes`)
const session = require(`express-session`)
const path = require('path')
const app = express()
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000


app.set(`view engine`, `ejs`)
app.use(express.static(path.join(__dirname, '/')))
app.use(express.urlencoded({extended: false}))
app.use(session({
    secret: 'Kosu',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))
io.on('connection', socket => {
    socket.emit('message','welcome to chatRoom')
    socket.broadcast.emit('message', "A user has join the chat")
    
    socket.on('disconnect', () => {
        io.emit('message',"a User has left the chat")
    })
    
    socket.on('chatMessage' ,(msg) => {
        console.log(msg)
        socket.broadcast.emit('message', msg)
        
    })
    
})
app.use(`/`, routes)

app.listen(port, () => {
    console.log(`KOSU, ONLINE NOW AT PORT ${port}`)
})