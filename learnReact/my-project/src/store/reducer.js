import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION, GET_INIT_LIST} from './actionType'

const defaultState = {
  inputValue: "111",
  list: []
};

// reducer 可以接收state，
export default(state= defaultState, action) => {
  console.log(action)
  const newState = JSON.parse(JSON.stringify(state));
  if(action.type === CHANGE_INPUT_VALUE) {
    newState.inputValue = action.value;
    return newState
  } else if(action.type === ADD_TODO_ITEM) {
    newState.list.push({title: action.value});
    return newState
  } else if(action.type === DELETE_TODO_ITEM) {
    newState.list.splice(action.index,1)
    return newState;
  } else if(action.type === INIT_LIST_ACTION) {
    newState.list = action.data;
    return newState;
  } else if(action.type === GET_INIT_LIST) {
    console.log(1,action)
    newState.list = action.data;
    return newState;
  }
  return state;
}
