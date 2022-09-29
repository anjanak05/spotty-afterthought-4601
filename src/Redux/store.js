import {applyMiddleware, legacy_createStore, combineReducers} from "redux"
import thunk from "redux-thunk"
import {reducer as authReducer} from "./authReducer/reducer"
import {reducer as footerReducer} from "./footerReducer/reducer"
import {reducer as paymentPageReducer} from "./paymentPageReducer/reducer"
import {reducer as productPageReducer} from "./productPageReducer/reducer"
import {reducer as navbarReducer} from "./navbarReducer/reducer"
import {reducer as homePageReducer} from "./homePageReducer/reducer"
import {reducer as checkoutPageReducer} from "./checkoutPageReducer/reducer"

let reducer = combineReducers({authReducer, navbarReducer, homePageReducer, footerReducer, paymentPageReducer, productPageReducer, checkoutPageReducer})
export const store = legacy_createStore(reducer, applyMiddleware(thunk))
