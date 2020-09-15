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
require('./server/routes/jokes.routes')(app)


// app.use(express.json(), express.urlencoded({ extended: true }));

// This is where we import the users routes function from our user.routes.js file
// const AllMyUserRoutes = require("./server/routes/user.routes");
// AllMyUserRoutes(app);

// app.listen(8000, () => console.log("The server is all fired up on port 8000"));
