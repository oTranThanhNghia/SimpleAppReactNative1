import { createSelector } from 'reselect';

const TAG = 'Login-selector';

export const getId = (state) => {
  console.log(TAG + ' getId ' + JSON.stringify(state));
  return state.loginReducer.id;
};
// https://github.com/reduxjs/reselect#createselectorinputselectors--inputselectors-resultfunc
export const getLoginState = createSelector(
  [getId],
  (id) => {
    console.log(TAG + ' getLoginState resultFunc ' + id);
    return id === -1 ? 'Not Logged In' : 'Logged In';
  }
);
