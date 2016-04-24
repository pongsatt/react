const initState = {
    formValids: {}
}

export default (state = initState, action) => {
  switch (action.type) {
    case 'SET_FORM_VALUE':
      return Object.assign({}, state, action.payload);
    case 'SET_FORM_VALID':
      return Object.assign({}, state, {formValids: Object.assign({}, state.formValids, action.payload)});
    default:
      return state
  }
}