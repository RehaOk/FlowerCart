import React from "react";
import history from "./utils/history";
import thunk from "redux-thunk";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import Index from "./pages/index.js";
import { Provider } from "react-redux";
import cartReducer from "./redux/reducers/cartReducer";
import { Route, Router, Switch } from "react-router-dom";
import "./index.css";

const store = createStore(cartReducer, applyMiddleware(thunk));

const routing = (
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={Index} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

ReactDOM.render(routing, document.getElementById("root"));
