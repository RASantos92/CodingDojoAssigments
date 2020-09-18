const mongoose = require("mongoose");


const database = "spaceCrabs"
mongoose.connect(`mongodb://localhost/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(res => console.log("Now rocking the mainframe! Whatcha waitin' for?!"))
    .catch(err => console.log("Not connecting to database- NoWay MothaTruka!...${err}"));










