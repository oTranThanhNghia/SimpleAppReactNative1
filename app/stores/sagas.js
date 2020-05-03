import { all } from 'redux-saga/effects';
import { loginSagas } from '../features/login/sagas';
import { homeSagas } from '../features/home/sagas';

export default function* rootSaga() {
  yield all([...loginSagas]); // all([...otherSaga])
  yield all([...homeSagas]);
}
