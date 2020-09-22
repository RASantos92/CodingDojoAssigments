const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/students", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Now rocking in the mainframe!"))
    .catch(() => console.log("Not connecting to database- NoWay MothaTruka!"));




