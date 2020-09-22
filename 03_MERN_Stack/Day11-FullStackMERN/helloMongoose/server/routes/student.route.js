const StudentController = require("../controller/student.controller");

module.exports = app => {
    app.get("/api/students", StudentController.index);
    app.post("/api/create/student", StudentController.create);
    app.get("/api/show/student/:id", StudentController.show);
    app.put("/api/update/student/:id", StudentController.update);
    app.delete("/api/destroy/student/:id", StudentController.destroy);
    app.post("/api/create/book/:studentID", StudentController.createBook);
    // app.post("/api/update/book/:studentID", StudentController.updateBook);
    // app.post("/api/destroy/book/:studentID", StudentController.destroyBook);
};


// when creating a new book for student in postman- I get a 404 in postman
// but when I query students, I see that the book was added??

// Also, browser not updating with the added book from postman?  Noticed on my server a DeprecationWarning:
// DeprecationWarning: Mongoose: `findOneAndUpdate()` and `findOneAndDelete()` without the `useFindAndModify` option set to false are deprecated