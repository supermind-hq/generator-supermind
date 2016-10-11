import { combineReducers } from 'redux'
import { types } from './Actions'

//----------------------------------------
// Placeholder Reducer
//----------------------------------------

function placeholder(state = 0, action) {
  switch (action.type) {
    case types.ACTION_ONE:
      return action.value
    case types.ACTION_TWO:
      return action.value
    default: return state
  }
}

//----------------------------------------
// Root Reducer
//----------------------------------------

export default combineReducers({
  placeholder
})
