import {takeEvery, put} from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionType';
import { initListAction } from './actionCreators'
import axios from 'axios'

function* getInitList() {
  try {
    const res = yield axios.get('http://localhost:3000');
    const data = res.data;
    const action = initListAction(data.list);
    console.log(action)
    yield put(action)
  } catch(e) {
    console.log('list.json 网络请求失败')
  }

}

function* saga() {
  yield takeEvery(GET_INIT_LIST, getInitList)
}

export default saga;