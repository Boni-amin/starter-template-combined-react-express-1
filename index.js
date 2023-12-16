// import app
const app = require("./app");

// import dotenv middleware
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});
const port = process.env.RUNNING_PORT || 5000;

// Listen app
app.listen(port, () => {
    console.log(`Server started on port ${port}...`);
});