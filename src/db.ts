import dotenv from "dotenv";
dotenv.config();
import pg from "pg";



const db = new pg.Client({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

db.connect()
  .then(() => console.log("Conectado ao banco!"))
  .catch((err) => {
    console.error("Conexão falhou:", err);
    process.exit(1);
  });

console.log("Conectado")

export default db;
