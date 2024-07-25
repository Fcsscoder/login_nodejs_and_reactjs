const express = require("express");
const pool = require("./db/conn");
const router = express.Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const query = "SELECT * FROM users";

  pool.query(query, (err, users) => {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(401).json({ message: "Crendenciais inválidas" });
    }
  });
});

router.post("/createuser", (req, res) => {
  const { name, email, password } = req.body;

  const checkUserQuery = "SELECT * FROM users";

  pool.query(checkUserQuery, (err, users) => {
    if (err) {
      return res.status(500);
    }

    const existUser = users.find((user) => user.email === email);

    if (existUser) {
      return res.status(401).json("Email já está em uso!");
    }

    const createUserQuery = "INSERT INTO users (??, ??, ??) VALUES (?, ?, ?)";
    const placeholders = ["name", "email", "password", name, email, password];

    pool.query(createUserQuery, placeholders, () => {
      res.status(200).json("Conta criado com sucesso!");
    });
  });
});

router.post("/edituser", (req, res) => {
  const { newName, newEmail, newPassword, id } = req.body;

  const checkUserQuery = "SELECT * FROM users";

  pool.query(checkUserQuery, (err, users) => {
    if (err) {
      return res.status(500);
    }

    const existUser = users.find((user) => user.email === newEmail);

    if (existUser) {
      return res.status(401).json("Email já está em uso!");
    }

    const uptadeUserQuery =
      "UPDATE users SET ?? = ?, ?? = ?, ?? = ? WHERE ?? = ?";
    const placeholder = [
      "name",
      newName,
      "email",
      newEmail,
      "password",
      newPassword,
      "id",
      id,
    ];

    pool.query(uptadeUserQuery, placeholder, (err) => {
      if (err) {
        return res.status(500);
      }
      res.status(200).json({ message: "Usuário alterada com sucesso!" });
    });
  });
});

router.post("/removeuser", (req, res) => {
  const id = req.body.id;

  const removeUserQuery = "DELETE from users WHERE id = ?";

  pool.query(removeUserQuery, [id], (err) => {
    if (err) {
      return res.status(500);
    }
    res.status(200).json({ message: "Usuário apagado com sucesso!" });
  });
});

module.exports = router;
