const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const routers = require('./routes');

const constants = require('./util/constants');

const server = express();



mongoose.connect(constants.databaseUrl, { useNewUrlParser: true});
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:true}));
server.use(routers);

server.listen(3333);