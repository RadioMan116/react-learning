import { applyMiddleware ,createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from "./reducers";
import api from "./middleware/api";
import logger from "./middleware/logger";
import generateId from "./middleware/generateId";

export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk, api, logger, generateId)));