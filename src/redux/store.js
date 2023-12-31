import thunk from 'redux-thunk';
import { rootReducer } from "./root-reducer";
import { createStore , applyMiddleware ,compose} from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer,{},	composeEnhancers(applyMiddleware(thunk)))