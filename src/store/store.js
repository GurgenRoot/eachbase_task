import {combineReducers, createStore,applyMiddleware} from "redux";
import {CreateTaskReducer} from "./createTaskReducer";
import { reducer as formReducer } from 'redux-form';
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {logger} from "redux-logger";

const rootReducer = combineReducers(
    {
        CreateTaskReducer,
        form: formReducer
    }
);

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)));
