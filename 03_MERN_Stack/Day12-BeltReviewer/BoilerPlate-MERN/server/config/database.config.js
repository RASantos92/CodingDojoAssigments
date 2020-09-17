const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/students", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(res => console.log("Now rocking in the mainframe!"))
    .catch(err => console.log("Not connecting to database- NoWay MothaTruka!...${err}"));










