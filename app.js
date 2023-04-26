const express = require('express');
const bodyParser = require('body-parser')
const app = express();

const PORT = 8080;
const mainRouter = require('./routers/Mainrouter');

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', __dirname + "/views");
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/", mainRouter);

const server = app.listen(PORT, (err) => {
    if (err) {
        console.log("Error: ", err.message);
        return
    }
})
