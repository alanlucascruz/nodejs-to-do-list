const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const JWT_SECRET = process.env.JWT_SECRET || "";

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const invalidPasswordMessage = "E-mail e/ou senha inválidos.";

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: invalidPasswordMessage });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).json({ message: invalidPasswordMessage });
    }

    const token = jwt.sign({ _id: user._id }, JWT_SECRET);

    delete user._doc.password;

    res.json({ ...user._doc, token });
  } catch (error) {
    res.status(500).json({ message: "Erro ao entrar no sistema.", error });
  }
};

const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res
        .status(409)
        .json({ message: "Usuário já existe. Por favor, faça o seu Login." });
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: encryptedPassword,
    });

    delete user._doc.password;

    const token = jwt.sign({ _id: user._id }, JWT_SECRET);

    res.status(201).json({
      ...user._doc,
      token,
    });
  } catch (error) {
    res.status(400).json({ message: "Erro ao registrar o usuário.", error });
  }
};

const updatePassword = async (req, res) => {
  try {
    const { old_password, new_password } = req.body;
    const { _id } = req.user;

    const user = await User.findById(_id);

    const match = await bcrypt.compare(old_password, user.password);

    if (!match) {
      return res.status(401).json({ message: "A antiga senha não confere." });
    }

    const encryptedNewPassword = await bcrypt.hash(new_password, 10);

    await User.updateOne({ _id }, { password: encryptedNewPassword });

    res.json({ message: "Senha alterada com sucesso." });
  } catch (error) {
    res.status(400).json({ message: "Erro ao alterar a senha.", error });
  }
};

module.exports = { signIn, signUp, updatePassword };
