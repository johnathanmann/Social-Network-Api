const { Thought, User } = require('../models');

module.exports = {

  // Find all instances of the thought model
 getThoughts(req, res){
    // The empty brackets will find all since nothing is specified
    Thought.find({})
        .then(dbThought => res.json(dbThought))
        .catch(err => {
            console.log(err);
            res.status(400).json(err)
        })
},

// Find a thought from the id in the url seen here as {params}
getThought({params}, res){
  Thought.findOne({ _id: params.id })
  .then(dbThought => res.json(dbThought))
        .catch(err => {
            console.log(err);
            res.status(400).json(err)
        })
},

// Create a new instance of the thought model and push it to the thoughts schema of the specified id
createThought({ body }, res) {
  console.log(body);
  Thought.create(body)
    .then((thoughtData) => {
      return User.findOneAndUpdate(
        { _id: body.userId },{ $push: { thoughts: thoughtData._id } },{ new: true });})
        .then(dbThought => res.json("Thought posted"))
        .catch(err => {
            console.log(err);
            res.status(400).json(err)
        })
},

// Find and delete a thought from the id in the url seen here as {params}
deleteThought({params}, res){
  Thought.deleteOne({ _id: params.id })
  .then(dbThought => res.json("Thought deleted"))
        .catch(err => {
            console.log(err);
            res.status(400).json(err)
        })
},

// Find and update by the id in the url from the json sent through seen here as {params}
updateThought({params, body}, res){
  Thought.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
  .then(dbThought => res.json("Thought updated"))
        .catch(err => {
            console.log(err);
            res.status(400).json(err)
        })
},
}

