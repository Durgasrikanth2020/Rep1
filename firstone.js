
const express = require('express');
const app = express();
const PORT = 4000;

app.get('/',(req,res) => {
    res.send(`node and express server is running on port ${PORT}`);
});

app.listen(PORT, () => {
    console.log("server is running");
})