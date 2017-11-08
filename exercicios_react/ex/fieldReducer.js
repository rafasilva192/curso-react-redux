const INITIAL_VALUE = { value: 'OPA' }


export default (state = INITIAL_VALUE, action) => {
  switch(action.type) {
    case 'VALUE_CHANGED':
      return { value: action.payload }
    default:
      return state
  }
}
