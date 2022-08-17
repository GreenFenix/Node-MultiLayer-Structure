const debug = require('debug')('app:userController');

const userService = require('../services/user');

async function getUsers(req, res) {
    debug('Hit the user controller');
    const users = await userService.getUsers();
    debug('Data obtained: ');
    debug(users);

    res.json(users);
}

module.exports = { getUsers };
