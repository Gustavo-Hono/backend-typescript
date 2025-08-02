import express, { Request, Response } from "express";
import db from "./db";
import router from "./routes/user.router";



const app = express();
app.use(express.json());

app.use(router)

app.listen(3000, () => console.log("Servidor rodando em http://localhost:3000"));
