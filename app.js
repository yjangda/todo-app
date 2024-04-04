const express = require("express");
const bodyParser = require("body-parser")
const UserRoute = require("./routers/user.router");
const ToDoRoute = require('./routers/todo.router');
const app = express();

app.use(bodyParser.json())

app.use("/",UserRoute);
app.use("/",ToDoRoute);

module.exports = app;