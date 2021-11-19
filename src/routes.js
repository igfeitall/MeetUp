import { response, Router } from "express";
import multer from "multer";

import multerConfig from "./config/multer"; 

import userController from "./app/controllers/userController";
import sessionController from "./app/controllers/SessionController";

import authMiddleware from "./app/middlewares/auth";

const routes = new Router();
const upload = multer(multerConfig);

routes.post("/users", userController.store);
routes.post("/sessions", sessionController.store);

routes.put("/users", authMiddleware, userController.update);
routes.put("/files", upload.single("file"), (req,res) => {
  return res.json({ ok: true})
})

export default routes;
