const JokesControllers = require("../controllers/jokes.controllers");

module.exports = app => {
  app.get("/api/jokes", JokesControllers.index);
  app.post("/api/jokes/new", JokesControllers.create);
  app.get("/api/jokes/show/:id", JokesControllers.show);
  app.put("/api/jokes/update/:id", JokesControllers.update);
  app.delete("/api/jokes/destroy/:id", JokesControllers.destroy);
};
























// module.exports = (app) => {
//   app.get('/api/jokes', JokesController.index);
//   app.post('/api/create/joke', JokesController.create);
//   app.get('/api/joke/:id', JokesController.show);
//   //will send the old object back
//   app.put('/api/update/joke/:id', JokesController.update);
//   app.delete('/api/destroy/joke/:id', jokesController.destroy);

