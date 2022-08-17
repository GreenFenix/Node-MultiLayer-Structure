const userController = require('./api/user');

module.exports.set = app => {
    app.get('/users', userController.getUsers);
}