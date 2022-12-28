const routes = require("express").Router();
const {
  dailyProductivity,
  categoryProgress,
} = require("../controllers/DashboardController");

routes.get("/daily-productivity", dailyProductivity);
routes.get("/category-progress", categoryProgress);

module.exports = routes;
