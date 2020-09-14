const express = require("express"),
    app = express(),
    cors = require("cors"),
    port = 8000,
    faker = require("faker"),
    server = app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(cors());
app.use(express.json());




// we can hard code some users like this
// later on we will want to store users in a database
const instructors = [
    { firstName: "Adrien", lastName: "Dion" },
    { firstName: "Anne", lastName: "Moore" },
    { firstName: "Phil", lastName: "Krull" },
    { firstName: "Mike", lastName: "Mazur" },
    { firstName: "Chris", lastName: "Thompson" }
];
const students = [
    { firstName: "John", lastName: "Pike" },
    { firstName: "Robert", lastName: "Santos" },
    { firstName: "Josh", lastName: "Wren" },
    { firstName: "Rob", lastName: "Moore" },
    { firstName: "Arthur", lastName: "Solis" }
]

app.get("/instructors", (request, response) => {
    response.json({ "results": { "instructors": instructors, "students": students } });
});


//example of pulling a student form the list based on index
// app.get("/student/:idx", (request,response)=>{
//     response.json({"result": students[request.params.idx]})
// }


//example of what POST request looks like
// app.post("/create", (request, response) => {
//     const instructor = request.body;
//     console.log(instructor);
//     response.json({ "message": "Success" })
// })





// app.get('/', (request, response) => {
//     response.json({ "message": "I am a Json object." })
// })

// app.listen(port, () => console.log('Listening on port ${port}'));


// req is short for request
// res is short for response