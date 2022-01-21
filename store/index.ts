import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { systemReducer } from "./system/reducers";
import { SystemAction } from "./system/types";

const appReducer = combineReducers({
  system: systemReducer,
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

export type AppState = ReturnType<typeof rootReducer>;
export type AppAction = SystemAction;

export function makeStore(initialState: AppState) {
  if (process.env.NODE_ENV === "development") {
    return createStore(
      rootReducer,
      initialState,
      composeWithDevTools(
        applyMiddleware(thunk as ThunkMiddleware<AppState, AppAction>)
      )
    );
  } else {
    return createStore(
      rootReducer,
      initialState,
      applyMiddleware(thunk as ThunkMiddleware<AppState, AppAction>)
    );
  }
}

export type AppStore = ReturnType<typeof makeStore>;
