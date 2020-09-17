const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	setup: {
		type: String,
		required: [true, "This is how we validate"],
		minlength: [5, "Setup has to be more than 5 characters"]
	},
	punchline: String
}, { timestamps: true });

const Joke = mongoose.model("Joke", JokeSchema);   //this is registering Joke as schema 

module.exports = Joke;


// example from the Adriens video
// const StudentSchema = new mongoose.Schema({
// 	firstName: {
// 		type: String,
// 		required: [true, "First name is required"],
// 		minlength: [2, "First name must be at least 2 characters"]
// 	},
// 	lastName: {
// 		type: String,
// 		required: [true, "Last name is required",
// 			minlength: [2, "Last name must be at least 2 characters"]
// 	},
// 	age: {
// 		type: Number,     //can also say here [Number, "Age must be a number"]
// 		required: [true, "Age is required"],
// 		min: [14, "A student must be at least 14 years old"]
// 	}
// }, { timestamps: true })

