const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/jokes", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("Now rocking in the mainframe!"))
	.catch(() => console.log("Not connecting to database- YOU SUCK!"));




