import {getObj} from '../controllers/objController'; 

const routes = (app) => { 
    app.route('/testing') 
    // GET Endpoint 
    .get(getObj); 
}

export default routes; 