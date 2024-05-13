const express = require("express");
const {
    validatorCreateUser,validatorGetUser
  } = require("../validators/user");
const { getUsers, getUser, createUser, updateUser, deleteUser } = require("../controllers/user");
const router = express.Router();

router.get("/", getUsers);
router.get("/:id", validatorGetUser, getUser);
router.post("/", validatorCreateUser, createUser);
router.put("/", validatorCreateUser, validatorCreateUser, updateUser);
router.delete("/:id", validatorGetUser, deleteUser);


module.exports = router