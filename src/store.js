import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { reducer as boardReducer } from "features/board/redux/reducer";

const reducer = combineReducers({
  board: boardReducer,
});

const middlewares = [thunk.withExtraArgument(/* extraData */)];
const store = createStore(
  reducer,
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true })
      : (arg) => arg
  )
);

export default store;
