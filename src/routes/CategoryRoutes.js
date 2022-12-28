const routes = require("express").Router();
const {
  index,
  show,
  store,
  update,
  destroy,
} = require("../controllers/CategoryController");

routes.get("/", index);
routes.get("/find/:filter", index);
routes.get("/:id", show);
routes.post("/", store);
routes.put("/:id", update);
routes.delete("/:id", destroy);

module.exports = routes;
