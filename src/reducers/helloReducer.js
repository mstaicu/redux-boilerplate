export default function(state = 'world', action) {
  switch (action.type) {
    case 'SAY_HELLO':
      return action.payload.name;
    default:
      return state;
  }
}
