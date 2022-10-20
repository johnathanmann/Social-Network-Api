const { User, Thought } = require('../models');

module.exports = {

 getUsers(req, res){
    // The empty brackets will find all since nothing is specified
    User.find({})
        .then(dbUser => res.json(dbUser))
        .catch(err => {
            console.log(err);
            res.status(400).json(err)
        })
},

 createUser(req, res){
    User.create(req.body)
      .then((dbUser) => res.json(dbUser))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
 }


}

