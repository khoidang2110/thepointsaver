import { all, put, takeLatest, call } from "redux-saga/effects";

import { GET_COMMITMENTS_REQUEST, GET_DATA_DEAL_REQUEST, GET_DEAL_REQUEST } from "./actionTypes";
import {
  getCommitmentsFailure,
  getCommitmentsSuccess,
  getDataDealFailure,
  getDataDealSuccess,
  getDealFailure,
  getDealSuccess,
} from "./actions";
import { getAllDeal, getCommitments } from "@/app/_api/AuthService";

/*
  Worker Saga: Fired on FETCH_TODO_REQUEST action
*/

function* getDealSaga(payload: any): any {
  try {
    const response = yield call(getAllDeal, payload.payload);
    yield put(getDealSuccess(response?.data));
  } catch (e: any) {
    yield put(
      getDealFailure({
        error: e.message,
      }),
    );
  }
}

function* payloadDataGetDeal(payload: any): any {
  try {
    yield put(getDataDealSuccess(payload.payload));
  } catch (e: any) {
    yield put(
      getDataDealFailure({
        error: e.message,
      }),
    );
  }
}

function* getCommitmentsSaga(payload: any): any {
  try {
    const response = yield call(getCommitments, payload.payload);
    yield put(getCommitmentsSuccess(response.data));
  } catch (e: any) {
    yield put(
      getCommitmentsFailure({
        error: e.message,
      }),
    );
  }
}

function* userSaga() {
  yield all([takeLatest(GET_DEAL_REQUEST, getDealSaga)]);
  yield all([takeLatest(GET_DATA_DEAL_REQUEST, payloadDataGetDeal)]);
  yield all([takeLatest(GET_COMMITMENTS_REQUEST, getCommitmentsSaga)]);
}

export default userSaga;
