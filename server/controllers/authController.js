const users = require("../models/users")

let id = 1;

module.exports = {
    register: (req, res) =>{
        const { session } = req
        const { username, password } = req.body;

        users.push({id, username, password})
        id++;

        session.user.username = username;
        // console.log(session.users)
        res.status(200).send(session.user)
    },
    login: (req, res) =>{
        const { session } = req
        const { username, password }=req.body
        const findUser = users.find(user => user.username === username && user.password === password)

        if (findUser){
            session.user.username = user.username
            res.status(200).send(session.user)
        }else {
            res.status(500).send('Incorrect Username/Password')
        }
    },
    signout: (req, res) =>{
        req.session.destroy()
        res.status(200).send(req.session)
    },
    getUser: (req, res) =>{
        res.status(200).send(req.session.user)
    }
}