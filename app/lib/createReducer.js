const TAG = 'createReducer';

export default function createReducer(initialState, handlers) {
  // console.log(
  //   TAG +
  //     ' createReducer initialState= ' +
  //     JSON.stringify(initialState) +
  //     '\n handlers= ' +
  //     JSON.stringify(handlers)
  // );
  return function reducer(state = initialState, action) {
    // console.log(
    //   TAG + ' reducer= ' + JSON.stringify(state) + '\n action= ' + JSON.stringify(action)
    // );
    if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
}
