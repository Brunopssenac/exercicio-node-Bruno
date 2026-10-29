import express from "express"
import games from "./games.js";

const app = express();
const port = 3000;

app.get("/", (requisicao, resposta) => {
resposta.send(games);
});

app.listen(3000, () => console.log(`Servidor rodando na porta ${port}`));
