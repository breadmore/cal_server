const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;
const router = require("./routes/router");
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//app.use(express.static(path.join(__dirname, '..', 'public/')));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});
app.use("/", router);


app.listen(PORT, () => {
    console.log(`Server On : localhost:${PORT}/`);
})