const express = require('express');
const cors = require('cors');
require("dotenv").config();
const bodyParser = require('body-parser');


const connection = require('./config/db');
const { authRouter } = require('./routes/Auth.route');
const authorization = require('./middlewares/authentication.middleware');
const doctorRouter = require('./routes/Doctor.route');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());


app.use('/auth', authRouter);
app.use('/doctors', authorization, doctorRouter);

const port = process.env.PORT;
app.listen(PORT, async() => {
    try {
        await connection;
        console.log(`Server is running on port ${PORT}`);
    } catch (error) {
        console.error(error);
    }
});
