const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();

async function connectDatabase() {
  const user = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;
  const uri = `mongodb+srv://${user}:${password}@cluster0.earjrwd.mongodb.net/?retryWrites=true&w=majority`;

  mongoose.set("strictQuery", true);

  await mongoose.connect(uri);
}

function applyMiddlewares() {
  app.use(express.json());
  app.use("/", routes);
}

function startServer() {
  app.listen("3001", async () => {
    console.log("Servidor iniciado: http://localhost:3001");
  });
}

(async () => {
  try {
    await connectDatabase();
    applyMiddlewares();
    startServer();
  } catch (error) {
    console.log("Erro na conexão com o MongoDB: ", error);
  }
})();
