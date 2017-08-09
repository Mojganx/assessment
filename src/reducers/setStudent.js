import { SET_STUDENT } from '../actions/batch/setChosenStudent'

export default (state = {}, action) => {
  switch(action.type) {
    case SET_STUDENT :
      return Object.assign({}, state, action.payload)
      default :
        return state
  }
}
