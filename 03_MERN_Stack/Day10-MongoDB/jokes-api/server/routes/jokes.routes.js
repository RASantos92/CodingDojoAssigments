const JokesControllers = require("../controllers/jokes.controllers");

module.exports = app => {
  app.get("/api/jokes/", JokesControllers.index);
  app.post("/api/jokes/new", JokesControllers.create);
  // app.get("/api/users/:id", UserController.findOneSingleUser);
  // app.put("/api/users/update/:id", UserController.updateExistingUser);
  // app.delete("/api/users/delete/:id", UserController.deleteAnExistingUser);
};
























// module.exports = (app) => {
//   app.get('/api/jokes', JokesController.index);
//   app.post('/api/create/joke', JokesController.create);
//   app.get('/api/joke/:id', JokesController.show);
//   //will send the old object back
//   app.put('/api/update/joke/:id', JokesController.update);
//   app.delete('/api/destroy/joke/:id', jokesController.destroy);

