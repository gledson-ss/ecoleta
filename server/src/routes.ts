import express from 'express'

import PointController from './controllers/PointController'
import ItemsControllers from './controllers/ItemsControllers'

const routes = express.Router();


const pointController = new PointController()
const itemsControllers = new ItemsControllers()

routes.get('/items', itemsControllers.index)

routes.post('/points', pointController.create)
routes.get('/points', pointController.index)
routes.get('/points/:id', pointController.show)




export default routes;