import { Router } from "express";
import {
  getUsers,
  createUser,
  deleteUser,
} from "../src/controllers/UserController.js";

const routes = Router();

routes.get("/users", getUsers);
routes.post("/users", createUser);
routes.delete("/users/:id", deleteUser);
export default routes;
