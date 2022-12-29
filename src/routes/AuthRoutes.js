const routes = require("express").Router();
const { signIn, signUp } = require("../controllers/AuthController");

routes.post("/signin", signIn);
routes.post("/signup", signUp);

module.exports = routes;
