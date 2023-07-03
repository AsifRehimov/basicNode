const dbcon = require("./config")

const User = function (user) {
  this.id = user.id;
  this.name = user.name;
  this.surname = user.surname;
  this.login = user.login;
  this.password = user.password;
};

User.getAllUsers = function (result) {
  dbcon.dbConnection.query("SELECT * FROM users", (err, res) => {
    result(err, res);
  })
};
User.getUserById = function (userId, result) {
  dbcon.dbConnection.query("SELECT * FROM users where Id=?", userId, (err, res) => {
    result(err, res);
  })
};
User.putUser = function (user, result) {
  dbcon.dbConnection.query("UPDATE users SET name = ?, surname = ? WHERE id = ?", [user.name, user.surname, user.id],
    (err, res) => {
      result(err, res);  
    });
};
User.createUser = (users, result) => {
  delete users.id;
  dbcon.dbConnection.query("INSERT INTO users SET ?", users, (err, res) => {
      result(err, res);
  });
};
User.deleteUser = (id, result) => {
  dbcon.dbConnection.query("DELETE FROM users WHERE id = ?", id, (err, res) => {
    result(err, res);
  });
};

module.exports = User;