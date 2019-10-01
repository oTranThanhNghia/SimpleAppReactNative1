import { all } from 'redux-saga/effects';
import { loginSagas } from 'app/features/login/sagas';

export default function* rootSaga() {
  yield all([...loginSagas]); // all([...otherSaga])
}
