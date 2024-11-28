import { all, put, takeLatest } from "redux-saga/effects";

import { GET_DEAL_REQUEST } from "./actionTypes";
import { getDealFailure, getDealSuccess } from "./actions";

/*
  Worker Saga: Fired on FETCH_TODO_REQUEST action
*/

function* payloadGetDeal(payload: any): any {
  try {
    console.log("payloadxx", payload);
    yield put(getDealSuccess(payload));
  } catch (e: any) {
    yield put(
      getDealFailure({
        error: e.message,
      }),
    );
  }
}

// function* fetchGetTaskSaga(action: any): any {
//   const response = yield call(getListTask);
//   if (response?.data.success) {
//     yield put(postDoTaskSuccess(response?.data.data));
//   } else {
//     yield put(postDoTaskFailture(response?.data.message));
//   }
// }

function* userSaga() {
  yield all([takeLatest(GET_DEAL_REQUEST, payloadGetDeal)]);
}

export default userSaga;
