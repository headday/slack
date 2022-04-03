const {User} = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const { secret } = require("../jwt-key");

const generateAccesToken = (id) => {
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
      const { username, password } = req.body;
      
      // здесь модель должна быть
      const condidate = await User.findAll({
            attributes: ['id', 'full_name'],
            where: {
              full_name: username
            }
          }
      );
      console.log(condidate.length);
      // если юзер не найден
      if (condidate.length) {
        res.status(400).json({ message: "User is already created", condidate });
      }
      
      const hashPassword = bcrypt.hashSync(password, 7);
      await User.create(
          {
            full_name: username,
            password: hashPassword
          }
      );
      return res.json({ message: "User created" });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Registration error" });
    }
  }
  async login(req, res) {
    try {
      const { username, password } = req.body;
      
      // здесь модель
      // let {rows:user} = await sequelize.query(`SELECT * FROM public.user WHERE 'username' = $1`,[username]);
      let user = await User.findAll(
          {
            attributes: ['id', 'full_name', 'password'],
            where: {
              full_name: username
            }
          }
      );
      user = user[0];
      console.log(user.id);

      if (!user.id) {
        return res.status(400).json({ message: "Not find user"});
      }
      const validPassword = bcrypt.compareSync(password, user.password);
      if (!validPassword) {
        return res.status(400).json({ message: "invalid password" });
      }
      const token = generateAccesToken(user.id);
      return res.json({ token });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Login error" });
    }
  }
  async getUsers(req, res) {
    try {
      const users = await User.findAll({
        attributes: ['id', 'full_name'],
      });
      res.json(users);
    } catch (e) {}
  }
}
module.exports = new authController();
