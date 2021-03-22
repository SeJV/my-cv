const express = require('express');
const cors = require('cors');
const path = require('path');

const financeRoute = require('./backend_finance/api')

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/finance', cors(), financeRoute)

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000);
