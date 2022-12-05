
const { login } =require("../controllers/auth.js");

const router = require("express").Router();
router.post("/login", login)

module.exports = router