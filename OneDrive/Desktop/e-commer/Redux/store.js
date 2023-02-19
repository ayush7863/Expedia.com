import {legacy_createStore,applyMiddleware,compose} from "redux"
import thunk from "redux-thunk"



// const composeEnhancer="undefined"|| (  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose)
import {reducer} from "./reducer"



// export const store =legacy_createStore(reducer,composeEnhancer(applyMiddleware(thunk)))

export const store=legacy_createStore(reducer,compose(applyMiddleware(thunk)))