import express from "express";

import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());

app.get("/", (request, response) => response.send("Hello Rocketseat"));

app.use("/users", usersRoutes);

export { app };
