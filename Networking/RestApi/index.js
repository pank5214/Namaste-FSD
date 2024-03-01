import bodyParser from "body-parser";
import express from "express";

const app = express();
app.use(bodyParser.json());

app.all("/", (req, res) => {
  //   console.log("Request:", req);
  //   console.log("Response:", res);
  res.send(`I'm up!!`);
});

const todos = [
  {
    id: "1",
    title: "Buy groceries",
    completed: false,
  },
  {
    id: "2",
    title: "Clean the house",
    completed: true,
  },
];
// Read
app.get("/todos", (req, res) => {
  res.json(todos);
});

// Create
app.post("/todos", (req, res) => {
  const newTodo = req.body;
  todos.push(newTodo);
  res.status(201).json({
    message: "New Todo Added!",
  });
});

// Update
app.put("/todos/:id", (req, res) => {
  const newTodoData = req.body;
  const todoParamId = req.params.id;
  const todoIndex = todos.findIndex((todo) => todo.id === todoParamId);

  if (todoIndex !== -1) {
    todos[todoIndex] = {
      id: todoParamId,
      ...newTodoData,
    };
    res.json({
      message: "Todo updated successfully!",
    });
  }else{
    res.status(400).json({
        message: "Todo Id doesn't exist. Please provide a valid Todo ID.",
      });
  }
});

// Delete
app.delete("/todos/:id", (req, res) => {
  const todoParamId = req.params.id;
  const todoIndex = todos.findIndex((todo) => todo.id === todoParamId);
  if (!todoIndex) {
    todos.splice(todoIndex, 1);
  }
  res.json({
    message: "Todo Id Deleted Successfully!",
  });
});

const PORT = 5111;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
