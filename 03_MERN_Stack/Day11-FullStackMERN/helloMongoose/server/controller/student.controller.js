// const { request, response } = require("express");
const { Student, Book } = require("../models/student.model");



module.exports = {
    index: (request, response) => {
        Student.find()
            .then(students => { response.json({ results: students }) })
            .catch(err => { console.log(err); })
    },
    create: (request, response) => {
        Student.create(request.body)
            .then(students => { response.json({ results: students }) })
            .catch(err => console.log(err))
    },
    show: (request, response) => {
        Student.findOne({ _id: request.params.id })
            .then(students => { response.json({ results: students }) })
            .catch(err => console.log(err))
    },
    update: (request, response) => {
        Student.findOneAndUpdate({ _id: request.params.id }, request.body, { useFindAndModify: false, runValidators: true })
            .then(students => {
                Student.findOne({ _id: request.params.id })
                    .then(students => {
                        response.json({ results: students })
                    })
                    .catch(err => response.json(err.errors))
            })
            .catch(err => response.json(err.errors))
    },
    destroy: (request, response) => {
        Student.deleteOne({ _id: request.params.id })
            .then(result => response.json({ results: result }))
            .catch(err => response.json({ message: "Something went wrong", error: err }));
    },
    createBook: (request, response) => {
        Book.create(request.body)
            .then(book => {
                Student.findOneAndUpdate({ _id: request.params.studentID }, { $push: { books: book } }, { useFindAndModify: false })
                    .then(student => response.redirect('/api/student/${request.params.studentID}'))
                    .catch(err => response.json(err.errors));
            })
            .catch(err => response.json(err.errors))
    }

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
