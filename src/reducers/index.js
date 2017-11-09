import { combineReducers } from 'redux'
import create from './create'
import alert from './alert'
import creatList from './creatList'

export default combineReducers({
  create, alert, creatList
})
