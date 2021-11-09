import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore, Store } from "redux";
import thunk from "redux-thunk";
import App from "./App";
import reducer from "./store/reducer";
import "./styles/global.scss";

const store: Store<CityState, CityAction> & {
  dispatch: DispatchType;
} = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,

  document.getElementById("root")
);
