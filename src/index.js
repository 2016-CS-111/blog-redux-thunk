import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import reducer from "./redux/reducers";
import App from "./components/App";

const store = createStore(reducer, applyMiddleware(thunk));
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);