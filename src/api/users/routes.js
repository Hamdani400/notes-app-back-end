const routes = (handler) => [
  {
    method: "POST",
    path: "/users",
    handler: handler.postUserHandler,
  },
  {
    method: "GEET",
    path: "/users/{id}",
    handler: handler.getUserByIdHandler,
  },
];

module.exports = routes;