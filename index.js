const express = require('express'); 
const app = express();

app.get('/', (req, res) => {
    res.send({ hi: "I'm here to have a good time"})
});

const PORT = process.env.PORT || 5000; 
app.listen(PORT);