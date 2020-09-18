const express = require('express'),
    app = express(),
    port = 8000,
    cors = require('cors'),
    server = app.listen(port, () => console.log(`Listening to port ${port}`));

app.use(cors());
app.use(express.json());


require('./server/config/database.config');
require('./server/routes/widget.routes')(app);










