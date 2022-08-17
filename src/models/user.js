const debug = require('debug')('app:userDAL');
const { MongoClient } = require('mongodb');

const getUsers = async () => {
    const url = 'mongodb+srv://dbUser:1aJPEMufJuqVCIg6@globomantics.8vgyljs.mongodb.net/?retryWrites=true&w=majority';
    const dbName = 'globomantics';
    let client;
    let sessions;

    debug('Hit the user DAL');

    try {
        client = await MongoClient.connect(url);
        debug('Connected to the mongo DB');

        const db = client.db(dbName);
        sessions = await db.collection('sessions').find().toArray();

        debug('Data retrieved');
    } catch (error) {
        debug(error.stack);
    }

    client.close();
    const response = { username: 'Charlie', email: 'charlie@email.com', level: sessions[0].level };

    return response;
};

module.exports = { getUsers };
