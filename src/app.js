const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');

const app = express();
const config = require('./config/config');
const router = require('./router');

const PORT = config.port || 3000;

app.use(morgan('tiny'));
app.use(express.json());
router.set(app);

app.get('/', (req, res) => {
    res.json({port: PORT, desc: 'Server is running'});
});

app.listen(PORT, () => {
    debug(`listening to port ${chalk.green(PORT)}`);
});
