export const setFormValue = (name, value) => {
  return {
    type: 'SET_FORM_VALUE',
    payload: {[name]:value}
  }
}

export const setFormValid = (path, valid) => {
  return {
    type: 'SET_FORM_VALID',
    payload: {[path]:valid}
  }
}