import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux"
import {cashReducer} from './cashReducer'
import { customerReducer } from "./customerReducer"
import { thunk } from "redux-thunk"


const rootReducer = combineReducers(
    {
        cash: cashReducer,
        customer: customerReducer
    }
)

export const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(applyMiddleware(thunk)))