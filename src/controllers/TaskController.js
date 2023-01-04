const Task = require("../models/Task");

const index = async (req, res) => {
  try {
    const { filter } = req.params;
    const userId = req.user._id;

    const data = await Task.find({
      user: userId,
      description: new RegExp(filter, "i"),
    })
      .populate("category")
      .sort("-created_at");

    res.json(data);
  } catch (error) {
    res.status(400).json({ message: "Erro ao listar as tarefas.", error });
  }
};

const show = async (req, res) => {
  try {
    const data = await Task.findById(req.params.id).populate("category");

    res.json(data);
  } catch (error) {
    res.status(400).json({ message: "Erro ao pesquisar a tarefa.", error });
  }
};

const store = async (req, res) => {
  try {
    const userId = req.user._id;

    const data = { ...req.body, user: userId };

    const newData = await Task.create(data);

    const populatedData = await Task.findById(newData._id).populate("category");

    res.status(201).json(populatedData);
  } catch (error) {
    res.status(400).json({ message: "Erro ao cadastrar a tarefa.", error });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;

    const data = { ...req.body, user: userId };

    const newData = await Task.findByIdAndUpdate(id, data).populate("category");

    res.json(newData);
  } catch (error) {
    res.status(400).json({ message: "Erro ao atualizar a tarefa", error });
  }
};

const destroy = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);

    res.status(204).end();
  } catch (error) {
    res.status(400).json({ message: "Erro ao excluir a tarefa.", error });
  }
};

module.exports = { index, show, store, update, destroy };
