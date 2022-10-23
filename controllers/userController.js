const { User, Thought } = require('../models');

module.exports = {

// Find all instances of the User model
 getUsers(req, res){
    // The empty brackets will find all since nothing is specified
    User.find({})
        .then(dbUser => res.json(dbUser))
        .catch(err => {
            console.log(err);
            res.status(400).json(err)
        })
},

// Find a user from the id in the url seen here as {params}
getUser({params}, res){
  User.findOne({ _id: params.id })
  .then(dbUser => res.json(dbUser))
        .catch(err => {
            console.log(err);
            res.status(400).json(err)
        })
},

// Create a new instance of the user model from the inputted json
createUser(req, res){
  User.create(req.body)
  .then(dbUser => res.json(dbUser))
    .catch(err => {
        console.log(err);
        res.status(400).json(err)
    })
 },

// Find and delete a user from the id in the url seen here as {params}
deleteUser({params}, res){
  User.deleteOne({ _id: params.id })
  .then(dbUser => res.json(dbUser))
        .catch(err => {
            console.log(err);
            res.status(400).json(err)
        })
},

// Find and update by the id in the url from the json sent through seen here as {params}
updateUser({params, body}, res){
  User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
  .then(dbUser => res.json(dbUser))
        .catch(err => {
            console.log(err);
            res.status(400).json(err)
        })
},

// Example of friend adding:
// http://localhost:3001/api/user/6351e1c1ecce5a3e7b64008e/friends/6355bba428566aa74f6c112
// The user with id: 6351e1c1ecce5a3e7b64008e will have id: 6355bba428566aa74f6c112 added a their friend
addFriend({ params }, res) {
  User.findOneAndUpdate(
    { _id: params.id },{ $addToSet: { friends: params.friendsId } }, { new: true })
    .then(dbUser => res.json(dbUser))
        .catch(err => {
            console.log(err);
            res.status(400).json(err)
        })
},

// The 2nd id in the url will be removed from the friends schema of the 1st id
removeFriend({ params }, res) {
  User.findOneAndUpdate(
    { _id: params.id },{ $pull: { friends: params.friendsId } }, { new: true })
    .then(dbUser => res.json(dbUser))
        .catch(err => {
            console.log(err);
            res.status(400).json(err)
        })
}
}

