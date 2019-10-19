import { all } from 'redux-saga/effects';
import { loginSagas } from 'app/features/login/sagas';
import { homeSagas } from 'app/features/home/sagas';

export default function* rootSaga() {
  yield all([...loginSagas]); // all([...otherSaga])
  yield all([...homeSagas]);
}
