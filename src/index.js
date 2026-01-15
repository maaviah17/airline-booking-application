const express = require('express');
const { ServerConfig,Logger } = require('./config');
const apiRoutes = require('./routes');

const app = express();

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT,()=>{
    console.log(`server started dj, running fine ;) PORT: ${ServerConfig.PORT}`);
    Logger.info("successfully started the server", "root", {});
});