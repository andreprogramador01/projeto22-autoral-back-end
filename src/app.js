import cors from "cors";
import express from "express";
import authRoutes from "./routes/authRoutes.js";


const app = express();
app.use(express.json());
app.use(cors());

app.use([authRoutes]);

app.listen(process.env.PORT, () => {
  console.log("Servidor rodando na porta " + process.env.PORT);
});
