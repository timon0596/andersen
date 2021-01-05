export const checkAsDoneWithTimeout = (action) => (dispatch) => {
  setTimeout(() => {
    dispatch(action);
  }, 2000);
};
