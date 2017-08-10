import { SET_STUDENT } from '../actions/batch/studentActions';

export default (state = {}, action) => {
  switch(action.type) {
    case SET_STUDENT :
      return Object.assign({}, state, action.payload)
      default :
        return state
  }
}
