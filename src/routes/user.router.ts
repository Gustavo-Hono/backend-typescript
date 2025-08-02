import { Router } from "express";
import { createUsers, deleta, getById, getUsers, putById } from "../controllers/user.controller";

const router = Router();

router.get("/", getUsers)
router.get("/:id", getById)
router.post("/", createUsers)
router.delete("/:id", deleta)
router.put("/:id", putById)

export default router;