import {CHANGE_INPUT_VALUE, INIT_LIST_ACTION, GET_INIT_LIST} from "./actionType";
import axios from "axios";

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
});

export const initListAction = (data) => ({
  type: INIT_LIST_ACTION,
  data
});

// export const getTodoList = () => {
//   return (dispath)=>{
//     axios.get('http://localhost:3000').then((res)=>{
//       const data = res.data;
//       console.log(data.list)
//       const action = initListAction(data.list);
//       console.log(action)
//       dispath(action);
//     })
//   }
// };
export const getInitList = (data) => ({
  type: GET_INIT_LIST,
  data
})