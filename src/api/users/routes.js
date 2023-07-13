const routes = (handler) => [
  {
    method: "POST",
    path: "/users",
    handler: handler.postUserHandler,
  },
  {
    method: "GET",
    path: "/users/{id}",
    handler: handler.getUserByIdHandler,
  },
  {
    method: "GEET",
    path: "/users/{id}",
    handler: handler.getUsersByUsernameHandler,
  },
];

module.exports = routes;
