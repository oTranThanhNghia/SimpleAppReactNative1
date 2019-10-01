const TAG = 'createReducer';

export default function createReducer(initialState, handlers) {
  console.log(TAG + ' createReducer initialState= ' + initialState + ' handlers= ' + handlers);
  return function reducer(state = initialState, action) {
    console.log(TAG + ' createReducer state= ' + state + ' action= ' + action);
    if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
}
