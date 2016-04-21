export function setRegistration(payload) {
  return {
    type: 'SET_REGISTER',
    payload
  }
}

export function setClientProfile(clientProfile){
    return {
    type: 'SET_CLIENT_PROFILE',
    payload: clientProfile
  }
}
