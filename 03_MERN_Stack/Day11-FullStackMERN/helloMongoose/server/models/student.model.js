const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Books require a title"]
    },
    subject: {
        type: String
    }
}, { timestamps: true })

const StudentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"],
        minlength: [2, "First name must be at least 2 characters"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"],
        minlength: [2, "Last name must be at least 2 characters"]
    },
    age: {
        type: Number,     //can also say here [Number, "Age must be a number"]
        required: [true, "Age is required"],
        min: [14, "A student must be at least 14 years old"]
    },
    books: [BookSchema]
}, { timestamps: true })

const Student = mongoose.model("Student", StudentSchema);   //this is registering Student as schema 
const Book = mongoose.model("Book", BookSchema);

module.exports.Student = Student;
module.exports.Book = Book;
