import * as loginReducer from '../features/login/reducers';
import * as homeReducer from '../features/home/reducers';

export default Object.assign({}, loginReducer, homeReducer);
