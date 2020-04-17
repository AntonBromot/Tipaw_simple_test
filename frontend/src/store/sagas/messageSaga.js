import * as API from '../../services/api';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import { CREATE_REQUEST, DELETE_REQUEST, GET_ALL_REQUEST, GET_ALL_SUCCESS, REQUEST_FAILTURE,
         DELETE_SUCCESS, CREATE_SUCCESS } from "../actions/messageActions";

function* getMessages({ payload }) {
  try {
    const messages = yield call(API.getMessages);

    yield put({ type: GET_ALL_SUCCESS, payload: messages });
  } catch (err) {
    yield put({ type: REQUEST_FAILTURE, payload: err.message });
    console.log('getMessages', err);
  }
}

function* deleteMessage({ payload: { _id } }) {
  try {
    const { messages } = yield select(state => state.message);
    yield call(API.deleteMessage, { _id });

    const filteredItems = messages.filter(item => item._id !== _id);

    yield put({ type: DELETE_SUCCESS, payload: filteredItems });
  } catch (err) {
    yield put({ type: REQUEST_FAILTURE, payload: err.message });
    console.log('deleteMessage', err);
  }
}

function* createMessage({ payload }) {
  try {
    const { messages } = yield select(state => state.message);
    const { data } = yield call(API.createMessage, payload);

    messages.push(data);

    yield put({ type: CREATE_SUCCESS, payload: messages });
  } catch (err) {
    yield put({ type: REQUEST_FAILTURE, payload: err.message });
    console.log('createMessage', err);
  }
}

export default [
  takeEvery(GET_ALL_REQUEST, getMessages),
  takeEvery(CREATE_REQUEST, createMessage),
  takeEvery(DELETE_REQUEST, deleteMessage),
];
