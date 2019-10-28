import { put, call, delay } from 'redux-saga/effects';
import { Alert } from 'react-native';
import * as loginActions from 'app/features/login/actions';
import { navigateToMainAppScreens } from 'app/navigation/NavigationHelpers';

export default function* fetchLogin() {
  yield put(loginActions.enableLoader());

  // call api
  // const response= yield call...
  yield delay(500);
  const response = {
    success: true,
    data: { id: 1 },
  };

  if (response.success) {
    yield put(loginActions.onLoginResponse(response.data));
    yield put(loginActions.disableLoader({}));
    yield call(navigateToMainAppScreens);
  } else {
    yield put(loginActions.loginFailed());
    yield put(loginActions.disableLoader({}));
    setTimeout(() => {
      Alert.alert('Login fail!');
    }, 200);
  }
}
