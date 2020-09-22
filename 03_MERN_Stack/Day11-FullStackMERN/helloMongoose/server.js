const express = require("express"),
    app = express(),
    port = 8000,
    cors = require("cors"),
    server = app.listen(port, () => console.log(`Listening on port ${port}`))


// This will fire our mongoose.connect statement to initialize our database connection
// require("./server/config/mongoose.config");

app.use(cors());
app.use(express.json());

// imports file into one line
require('./server/config/database.config');
require('./server/routes/student.route')(app)




