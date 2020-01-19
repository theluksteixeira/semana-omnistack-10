const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

//Métodos HTTP: GET, POST, PUT, DELETE
//Tipo de parâmetros:

// Query Params : req.query (filtros, ordenacao, paginação)
// Route Params: req.params (identificar um recurso na alteração ou remoção)
// Body: req.body (na criação)

routes.get('/search', SearchController.index);

routes.post('/devs', DevController.store);
routes.get('/devs', DevController.index);

module.exports = routes;