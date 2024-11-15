const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
require('./db/connections')

const basicRoutes = require('./basicroutes/basicRoutes');

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', basicRoutes);

const PORT = 4002;

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});
