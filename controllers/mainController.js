const  { Instructor } = require('../models/index')

class MainController{
    static view (req, res){
        res.render("home")
    }

    static dashboard (req, res){
        res.render("dashboard")
    }

    static login (req, res){
        res.render("login")
    }

    static loginPost (req, res){
        const enteredEmail = req.body.email
        const enteredPassword = req.body.password
        Instructor.findOne({
            where : {
                email : enteredEmail,
                password : enteredPassword
            }
        })
        .then(data => {
            if(!data){
                res.send("wrong credentials")
            } else {
                res.render("dashboard")
            }
        })
        .catch(err => {
            res.send(err)
        })
    }

    static chatRoom (req, res) {
        res.render("chatRoom")
    }
}

module.exports = MainController