const index = (req, res) => {
  try {
    res.json({});
  } catch (error) {
    res.status(400).json({ message: "Erro ao listar as tarefas.", error });
  }
};

const find = (req, res) => {
  res.json({});
};

const show = (req, res) => {
  res.json({});
};

const store = (req, res) => {
  res.json({});
};

const update = (req, res) => {
  res.json({});
};

const destroy = (req, res) => {
  res.json({});
};

module.exports = { index, find, show, store, update, destroy };
