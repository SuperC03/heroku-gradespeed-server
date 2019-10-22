const express = require('express');
const app = express();

// Setup Port
const PORT = process.env.PORT | 8080;

// Setup Routes
app.use('/overview', require('./routes/overview'));

app.listen(PORT, () => {
    console.log(`Server Listening on PORT ${PORT}`);
})