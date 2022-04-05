const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const { secret } = require("../jwt-key");

const generateAccessToken = (id) => {
  const payload = {
    id,
  };
  return jwt.sign(payload, secret, { expiresIn: "24h" });
};

class authController {
  async registration(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: "Registration error", errors });
      }
      const { login, name, password, bio } = req.body;

      // здесь модель должна быть
      const condidate = await User.findOne({
        attributes: ["id", "name"],
        where: {
          login,
        },
      });
      // console.log(condidate.length);
      // если юзер  найден
      if (condidate) {
        res.status(400).json({ message: "User is already created", condidate });
      }

      const hashPassword = bcrypt.hashSync(password, 7);
      await User.create({
        login,
        name,
        password: hashPassword,
        bio,
      });
      return res.json({ message: "User created" });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Registration error" });
    }
  }
  async login(req, res) {
    try {
      const { login, password } = req.body;
      let user = await User.findOne({
        attributes: ["id", "login", "password", "name"],
        where: {
          login,
        },
      });
      if (!user.id) {
        return res.status(400).json({ message: "Not find user" });
      }
      const validPassword = bcrypt.compareSync(password, user.password);
      if (!validPassword) {
        return res.status(400).json({ message: "invalid password" });
      }
      const token = generateAccessToken(user.id);
      return res.json({ ...user.dataValues, token });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Login error" });
    }
  }
  async logout (req, res) {
    try {
      const {token} = req.body
    
      const decoded = jwt.verify(token, secret);

      // jwt.
      console.log(decoded);

      // jwtr.destroy(token)
      console.log(token)
      res.json({message: "success"});
    } catch (e) {
      res.status(400).json({ message: "Login error" });
    }
  }
  async getUsers(req, res) {
    try {
      const users = await User.findAll({
        attributes: ["id", "name", "login"],
      });
      res.json(users);
    } catch (e) {}
  }
}
module.exports = new authController();
