var Todo = require('../models/todo-model');

// get all todos
exports.get = function (req, res) {
    getTodos(res);
};

// create todo and send back all todos after creation
exports.create = function (req, res) {
    // create a todo, information comes from AJAX request from Angular
    Todo.create({
        text: req.body.text,
        done: false
    }, function (err, todo) {
        if (err)
            res.send(err);
        // get and return all the todos after you create another
        getTodos(res);
    });

};

// delete a todo
exports.delete = function (req, res) {
    Todo.remove({
        _id: req.params.todo_id
    }, function (err, todo) {
        if (err)
            res.send(err);

        getTodos(res);
    });
};

function getTodos(res) {
    Todo.find(function (err, todos) {
        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }
        res.json(todos); // return all todos in JSON format
    });
};