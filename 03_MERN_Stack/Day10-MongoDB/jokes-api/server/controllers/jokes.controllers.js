const { request, response } = require("express");
const Joke = require("../models/jokes.model");

module.exports = {
  index: (request, response) => {
    //Find- will find ALL jokes inside collection
    Joke.find()
      .then(jokes => { response.json({ results: jokes }) })
      .catch(err => { console.log(err); })
  },
  create: (request, response) => {
    Joke.create(request.body)
      .then(jokes => { response.json({ results: jokes }) })
      .catch(err => console.log(err))
  },
  // findOne- will find a particular joke from the collection from(name, _id)
  show: (request, response) => {
    Joke.findOne({ _id: request.params.id })
      .then(jokes => { response.json({ results: jokes }) })
      .catch(err => console.log(err))
  },
  update: (request, response) => {
    Joke.findOneAndUpdate({ _id: request.params.id }, request.body, { useFindAndModify: false, runValidators: true }) //or use { new: true}
      .then(jokes => {
        Joke.findOne({ _id: request.params.id })
          .then(jokes => {
            response.json({ results: jokes })
          })
          .catch(err => response.json(err.errors))
      })
      .catch(err => response.json(err.errors))
  },
  destroy: (request, response) => {
    Joke.deleteOne({ _id: request.params.id })
      .then(result => response.json({ results: result }))
      .catch(err => response.json({ message: "Something went wrong", error: err }));
  },

}








// module.exports.findAllUsers = (req, res) => {
//   User.find()
//     .then(allDaUsers => res.json({ users: allDaUsers }))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };

// module.exports.findOneSingleUser = (req, res) => {
//   User.findOne({ _id: req.params.id })
//     .then(oneSingleUser => res.json({ user: oneSingleUser }))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };

// module.exports.createNewUser = (req, res) => {
//   User.create(req.body)
//     .then(newlyCreatedUser => res.json({ user: newlyCreatedUser }))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };

// module.exports.updateExistingUser = (req, res) => {
//   User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
//     .then(updatedUser => res.json({ user: updatedUser }))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };

// module.exports.deleteAnExistingUser = (req, res) => {
//   User.deleteOne({ _id: req.params.id })
//     .then(result => res.json({ result: result }))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };
