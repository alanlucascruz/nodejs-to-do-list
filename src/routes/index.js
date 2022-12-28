const routes = require("express").Router();
const auth = require("../middlewares/AuthMiddleware");

routes.use("/auth", require("./AuthRoutes"));
routes.use("/tasks", auth, require("./TaskRoutes"));
routes.use("/categories", auth, require("./CategoryRoutes"));

module.exports = routes;
