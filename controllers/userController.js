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

getUser({params}, res){
  User.findOne({ _id: params.id })
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
 },

 deleteUser({params}, res){
  User.deleteOne({ _id: params.id })
  .then(dbUser => res.json(dbUser))
        .catch(err => {
            console.log(err);
            res.status(400).json(err)
        })
},
updateUser({params, body}, res){
  User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
  .then(dbUser => res.json(dbUser))
        .catch(err => {
            console.log(err);
            res.status(400).json(err)
        })
}


}

