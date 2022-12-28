const routes = require("express").Router();
const {
  signIn,
  signUp,
  updatePassword,
} = require("../controllers/AuthController");
const auth = require("../middlewares/AuthMiddleware");

routes.post("/signin", signIn);
routes.post("/signup", signUp);
routes.put("/update-password", auth, updatePassword);

module.exports = routes;
