const Category = require("../models/Category");

const index = async (req, res) => {
  try {
    const { filter } = req.params;
    const userId = req.user._id;

    const data = await Category.find({
      user: userId,
      description: new RegExp(filter, "i"),
    }).sort("description");

    res.json(data);
  } catch (error) {
    res.status(400).json({ message: "Erro ao listar as categorias.", error });
  }
};

const show = async (req, res) => {
  try {
    const data = await Category.findById(req.params.id);

    res.json(data);
  } catch (error) {
    res.status(400).json({ message: "Erro ao pesquisar a categoria.", error });
  }
};

const store = async (req, res) => {
  try {
    const userId = req.user._id;

    const data = { ...req.body, user: userId };

    const newData = await Category.create(data);

    res.status(201).json(newData);
  } catch (error) {
    res.status(400).json({ message: "Erro ao cadastrar a categoria.", error });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;

    const data = { ...req.body, user: userId };

    await Category.findByIdAndUpdate(id, data);

    res.json(data);
  } catch (error) {
    res.status(400).json({ message: "Erro ao atualizar a categoria", error });
  }
};

const destroy = async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);

    res.status(204).end();
  } catch (error) {
    res.status(400).json({ message: "Erro ao excluir a categoria.", error });
  }
};

module.exports = { index, show, store, update, destroy };
