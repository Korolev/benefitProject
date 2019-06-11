import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import counterReducer from './counter'
import history from '../history'

export default combineReducers({
  counter: counterReducer,
  router: connectRouter(history)
})
