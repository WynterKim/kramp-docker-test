const express = require('express');

const PORT = 8080;

//APP gg
const app = express();
app.get('/', (req, res) => {
    res.send("mymy")
});

app.listen(PORT);
console.log("Server is running");
