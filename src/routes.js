const express = require('express');
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DesLikeController = require('./controllers/DeslikeController');



const routers = express.Router();

/**Dev routers */
routers.get('/dev', DevController.index);
routers.post('/dev', DevController.store);
routers.post('/dev/:devId/like',LikeController.store);
routers.post('/dev/:devId/deslike',DesLikeController.store);


module.exports = routers;