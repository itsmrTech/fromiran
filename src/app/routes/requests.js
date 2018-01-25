/**
 *          .::REQUESTS ROUTES::.
 * All request's apis are routed here.
 * 
 */
const routes = express.Router();

import Auth from '../middlewares/Auth';
import {
	send,
	
} from '../controllers/RequestsController'

//ENDPOINTS
routes.all('/', send);




export default routes;