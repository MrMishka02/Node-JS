var express = require("express");
const { readFileSync } = require("fs");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  const todosJSON = readFileSync("./todos.json", "utf8");
  const todos = JSON.parse(todosJSON);

  res.render("index", {
    title: "Express",
    todos: todos,
  });
});

router.get("/todos/:id", (req, res) => {
  const todoId = req.params.id;
  const todosJSON = readFileSync("./todos.json", "utf8");
  const todos = JSON.parse(todosJSON);

  const result = todos.filter((todo) => {
    return todo.id == todoId;
  });

  res.render('todo', {todo: result[0]});
});

module.exports = router;
