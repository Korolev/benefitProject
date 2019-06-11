import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import reducer from '../reducer'
import logger from '../middlewares/logger'
import thunk from 'redux-thunk'
import history from '../history'

const enhancer = applyMiddleware(thunk, routerMiddleware(history), logger)

const store = createStore(reducer, enhancer)

//dev only, no need in prod!
window.store = store

export default store
