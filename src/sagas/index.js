import { call, put, takeEvery } from 'redux-saga/effects';

function fetchError() {
  return fetch('').then(function(response) {
    return response.json();
  });
}

function* getNiceError() {
  try {
    const response = yield call(fetchError);

    yield put({
      type: 'SAY_HELLO',
      payload: {
        name: 'Great success',
      },
    });
  } catch (error) {
    yield put({
      type: 'SAY_HELLO',
      payload: {
        name: 'Great failure',
      },
    });
  }
}

export default function*() {
  yield takeEvery('ERROR_TIME', getNiceError);
}
