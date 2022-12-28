const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers["token"];

  if (!token) {
    return res
      .status(401)
      .json({ auth: false, message: "Token não informado." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
  } catch (error) {
    return res
      .status(401)
      .json({ auth: false, message: "Token inválido.", error });
  }

  return next();
};

module.exports = verifyToken;
