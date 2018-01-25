/**
 *          .::ROUTES::.
 * All routes are imported here.
 * 
 */
const routes = express.Router();
import requests from './requests';

//USING ROUTES
routes.use('/req', requests);

export default routes;