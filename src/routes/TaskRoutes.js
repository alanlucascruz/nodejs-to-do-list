const routes = require("express").Router();
const {
  index,
  find,
  show,
  store,
  update,
  destroy,
} = require("../controllers/TaskController");

routes.get("/", index);
routes.get("/find/:filter", find);
routes.get("/:id", show);
routes.post("/", store);
routes.put("/:id", update);
routes.delete("/:id", destroy);

module.exports = routes;
