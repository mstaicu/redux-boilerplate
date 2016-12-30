import {call, put, takeEvery} from 'redux-saga/effects';

function fetchError() {
    /**
     * TODO: Add RESTful endpoint for testing
     */
    return fetch("")
        .then(function(response) {
            return response.json()
        });
};

function* getNiceError() {
    try {
        const response = yield call(fetchError);

        /**
         * TODO: Replace it with an action object
         */
        yield put({
            type: 'SAY_HELLO',
            payload: {
                name: 'Great success'
            }
        });
    } catch (error) {
        /**
         * TODO: Replace it with an action object
         */
         yield put({
             type: 'SAY_HELLO',
             payload: {
                 name: 'Great failure'
             }
         });
    };
};

export default function*() {
    yield takeEvery("ERROR_TIME", getNiceError);
};
