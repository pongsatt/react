import {Map, fromJS} from 'immutable';

const initialState = Map({
   registration: fromJS({
        vendor: '',
        accoutType: '',
        subType: '',
        valid: null
   }),
   clientProfile: fromJS({
       email: '',
       phone: '',
       valid: null
   })
});

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case 'SET_REGISTER':
      return state.mergeIn(['registration'], action.payload);
    case 'SET_CLIENT_PROFILE':
       return state.mergeIn(['clientProfile'], action.payload);
  }
  return state;
}