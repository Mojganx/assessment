export const SET_STUDENT = 'SET_STUDENT';

export default (chosenStudent) => {
  return {
    type: SET_STUDENT,
    payload: chosenStudent
  }
}
