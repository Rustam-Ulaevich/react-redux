import {combineReducers, legacy_createStore as createStore} from "redux"
import {cashReducer} from './cashReducer'
import { customerReducer } from "./customerReducer"


const rootReducer = combineReducers(
    {
        cash: cashReducer,
        customer: customerReducer
    }
)

export const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())