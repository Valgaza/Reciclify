const authRouter = require("express").Router();
const {
  register,
  login,
  getProfile,
  editProfile,
} = require("../controller/auth");
const { checkToken } = require("../middlewares/JWT");

authRouter.post("/signup", register);
authRouter.post("/login", login);
authRouter.get("/profile", getProfile);
authRouter.post("/editprofile", editProfile);
module.exports = authRouter;
