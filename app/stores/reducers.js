import * as loginReducer from 'app/features/login/reducers';
import * as homeReducer from 'app/features/home/reducers';

export default Object.assign({}, loginReducer, homeReducer);
