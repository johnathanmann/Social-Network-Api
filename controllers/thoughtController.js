const { Thought, User } = require('../models');

module.exports = {

 getThoughts(req, res){
    // The empty brackets will find all since nothing is specified
    Thought.find({})
        .then(dbThought => res.json(dbThought))
        .catch(err => {
            console.log(err);
            res.status(400).json(err)
        })
},

getThought({params}, res){
  Thought.findOne({ _id: params.id })
  .then(dbThought => res.json(dbThought))
        .catch(err => {
            console.log(err);
            res.status(400).json(err)
        })
},

 createThought(req, res){
    Thought.create(req.body)
      .then((dbThought) => res.json(dbThought))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
 },

 deleteThought({params}, res){
  Thought.deleteOne({ _id: params.id })
  .then(dbThought => res.json(dbThought))
        .catch(err => {
            console.log(err);
            res.status(400).json(err)
        })
},
updateThought({params, body}, res){
  Thought.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
  .then(dbThought => res.json(dbThought))
        .catch(err => {
            console.log(err);
            res.status(400).json(err)
        })
}


}

