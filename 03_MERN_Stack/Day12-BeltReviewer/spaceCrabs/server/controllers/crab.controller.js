const Crabs = require("../models/crab.model");



module.exports = {
    index: (req, res) => {
        Crabs.find()
            .then(data => res.json({ results: data }))
            .catch(err => res.json(err.errors))
    },
    create: (req, res) => {
        Crabs.create(req.body)
            .then(data => res.json({ results: data }))
            .catch(err => res.json(err.errors))
    },
    show: (req, res) => {
        Crabs.findOne({ _id: req.params.id })
            .then(data => res.json({ results: data }))
            .catch(err => res.json(err.errors))
    },
    update: (req, res) => {
        Crabs.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, useFindAndModify: false })
            .then(data => res.json({ results: data }))
            .catch(err => res.json(err.errors))
    },
    destroy: (req, res) => {
        Crabs.deleteOne({ _id: req.params.id })
            .then(data => res.json({ results: data }))
            .catch(err => res.json(err.errors))
    },

}










//this is the random method that was in assignment but not used.....
// eric i used that and here is my code
// // get count of all documents in the collection
//         Jokes.countDocuments().then(num =>{

//             // Get a random entry
//             const randomNum = Math.floor(Math.random() * num)

//             // grab random document
//             Jokes.findOne().skip(randomNum).then(joke => {

//                 // send results
//                 res.json({results:joke})

//             // catch error
//             }).catch((err) => {

//                 // err msg
//                 res.json({
//                     message:"An error has occurred.",
//                     error:err
//                 })

//             }) 

//         })
















// module.exports.findAllUsers = (req, res) => {
//     User.find()
//         .then(allDaUsers => res.json({ users: allDaUsers }))
//         .catch(err => res.json({ message: "Something went wrong", error: err }));
// };

// module.exports.findOneSingleUser = (req, res) => {
//     User.findOne({ _id: req.params.id })
//         .then(oneSingleUser => res.json({ user: oneSingleUser }))
//         .catch(err => res.json({ message: "Something went wrong", error: err }));
// };

// module.exports.createNewUser = (req, res) => {
//     User.create(req.body)
//         .then(newlyCreatedUser => res.json({ user: newlyCreatedUser }))
//         .catch(err => res.json({ message: "Something went wrong", error: err }));
// };

// module.exports.updateExistingUser = (req, res) => {
//     User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
//         .then(updatedUser => res.json({ user: updatedUser }))
//         .catch(err => res.json({ message: "Something went wrong", error: err }));
// };

// module.exports.deleteAnExistingUser = (req, res) => {
//     User.deleteOne({ _id: req.params.id })
//         .then(result => res.json({ result: result }))
//         .catch(err => res.json({ message: "Something went wrong", error: err }));
// };
