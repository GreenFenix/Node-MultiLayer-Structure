const debug = require('debug')('app:userService');

const users = require('../models/user');

const getUsers = async () => {
    debug('Hit the user service');
    const getUsers = await users.getUsers();
    debug('Returning from service with data');

    return getUsers;
};

module.exports = { getUsers };
