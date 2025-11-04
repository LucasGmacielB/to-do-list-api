import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import taskRoutes from "./routes/taskRoutes.js";
import sequelize from "./config/database.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/tasks", taskRoutes);

sequelize.sync().then(() => {
  console.log("DB synced ✅");
  app.listen(process.env.PORT || 3000, () =>
    console.log(`API rodando na porta ${process.env.PORT || 3000}`)
  );
}).catch(err => {
  console.error("Erro ao sincronizar DB ❌", err);
});

app.listen(process.env.PORT, () =>
  console.log(`API rodando na porta ${process.env.PORT}`)
);