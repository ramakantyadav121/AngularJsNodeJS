module.exports = function (app) {

//todo database api
var todo = require('./dao/todo-dao');
app.get('/api/todos', todo.get);
app.post('/api/todos', todo.create);
app.delete('/api/todos/:todo_id', todo.delete);

// user database api
    var usersCollection = require('./dao/user-dao.js');
    app.post('/mongodb/loginAuthentication', usersCollection.loginAuthentication);
};
