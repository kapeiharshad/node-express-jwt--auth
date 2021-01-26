const { Router } = require("express");
const authService = require("../services/authService");

const router = Router();

router.get("/signup", authService.signup_get);
router.post("/signup", authService.signup_post);
router.get("/login", authService.login_get);
router.post("/login", authService.login_post);
router.get("/logout", authService.logout_get);

module.exports = router;
