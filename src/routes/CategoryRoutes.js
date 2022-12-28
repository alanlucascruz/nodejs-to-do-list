const routes = require("express").Router();

routes.get("/", (req, res) => {
  res.json({});
});
routes.get("/find/:filter", (req, res) => {});
routes.get("/:id", (req, res) => {});
routes.post("/", (req, res) => {});
routes.put("/:id", (req, res) => {});
routes.delete("/:id", (req, res) => {});

module.exports = routes;
