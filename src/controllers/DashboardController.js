const mongoose = require("mongoose");
const Task = require("../models/Task");
const Category = require("../models/Category");

const { ObjectId } = mongoose.Types;

const dailyProductivity = async (req, res) => {
  const userId = req.user._id;

  const start = new Date();
  start.setDate(start.getDate() - 30);
  const end = new Date();

  const data = await Task.aggregate()
    .match({
      user: ObjectId(userId),
      completed_at: {
        $gte: start,
        $lte: end,
      },
    })
    .group({
      _id: "$completed_at",
      count: { $sum: 1 },
    })
    .sort("_id");

  res.json(data);
};

const categoryProgress = async (req, res) => {
  const userId = req.user._id;

  const categories = await Category.find({ user: userId }).sort("description");
  const tasks = await Task.find({ user: userId });

  const data = [];

  categories.forEach(async (category) => {
    const totalTasks = tasks.filter((task) =>
      task.category.equals(category._id)
    ).length;

    if (totalTasks === 0) return;

    const tasksDone = tasks.filter(
      (task) => task.category.equals(category._id) && task.status === "done"
    ).length;

    const percentageDone = Math.round((tasksDone * 100) / totalTasks);

    const item = {
      category: category.description,
      color: category.color,
      tasks: totalTasks,
      tasks_done: tasksDone,
      percentage_done: percentageDone,
    };

    data.push(item);
  });

  res.json(data);
};

module.exports = { dailyProductivity, categoryProgress };
