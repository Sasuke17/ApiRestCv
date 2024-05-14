const express = require("express");
const {
    validatorCreateUser,validatorGetUser
  } = require("../validators/user");
const authMiddleware = require("../middleware/session");
const checkRol = require("../middleware/rol");
const { getUsers, getUser, createUser, updateUser, deleteUser } = require("../controllers/user");
const router = express.Router();

router.get("/",authMiddleware, getUsers);
router.get("/:id", validatorGetUser, getUser);
router.post("/", authMiddleware,  checkRol(["administrador"]),validatorCreateUser, createUser);
router.put("/", validatorCreateUser, validatorCreateUser, updateUser);
router.delete("/:id", validatorGetUser, deleteUser);


module.exports = router