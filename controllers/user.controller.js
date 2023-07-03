const User = require("../models/user.model")

exports.getAllUserd = function (req, res) {

  User.getAllUsers(function (err, result) {
    if (err) {
      res.send("xeta bas verdi")
      console.log(err);
    } else {
      res.render("pages/index", { result: result })
      console.log(result);
    }
  })
}
exports.getUserById = function (req, res) {

  User.getUserById(req.params.id, function (err, result) {
    if (err) {
      res.send("xeta bas verdi")
      console.log(err);
    } else {
      res.render("pages/editing", { user: result })
      console.log(result);
    }
  })
}
exports.createUserget = function (req, res) {

  res.render("pages/create")
  
}
exports.putUsers = function (req, res) {

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  User.putUser(
    new User(req.body),
    function (err, result) {

      if (err) {
        res.status(500).send({
          message: `User not found`
        });
      } else res.send({ result: result });

    })
}
exports.createUsers = function (req, res) {

  const users = new User({
    name: req.body.name,
    surname: req.body.surname,
    login: req.body.login,
    password: req.body.password,
  })
  User.createUser(users, (err, result) => {
    
    if (err) {
      res.status(500).send({
          message: `User not found`
        });
      } else res.send({ result: result });

    })
}
exports.deleteUser = (req, res) => {
  User.deleteUser(req.params.id, (err, data) => {
    if (err) {
        res.status(500).send({
          message: "Could not delete Tutorial with id " + req.params.id
        })}else res.send({ message: `Tutorial was deleted successfully!` });
      }
    )};