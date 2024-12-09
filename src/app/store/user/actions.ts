import {
  GET_DEAL_REQUEST,
  GET_DEAL_SUCCESS,
  GET_DEAL_FAILURE,
  GET_DATA_DEAL_SUCCESS,
  GET_DATA_DEAL_FAILURE,
  GET_DATA_DEAL_REQUEST,
  GET_COMMITMENTS_SUCCESS,
  GET_COMMITMENTS_REQUEST,
  GET_COMMITMENTS_FAILURE,
  GET_STORE_REQUEST,
  GET_STORE_SUCCESS,
  GET_STORE_FAILURE,
} from "./actionTypes";

export const getDealRequest = (payload: any): any => ({
  type: GET_DEAL_REQUEST,
  payload,
});

export const getDealSuccess = (payload: any): any => ({
  type: GET_DEAL_SUCCESS,
  payload,
});

export const getDealFailure = (payload: any): any => ({
  type: GET_DEAL_FAILURE,
  payload,
});

export const getDataDealRequest = (payload: any): any => ({
  type: GET_DATA_DEAL_REQUEST,
  payload,
});

export const getDataDealSuccess = (payload: any): any => ({
  type: GET_DATA_DEAL_SUCCESS,
  payload,
});

export const getDataDealFailure = (payload: any): any => ({
  type: GET_DATA_DEAL_FAILURE,
  payload,
});

export const getStoreRequest = (): any => ({
  type: GET_STORE_REQUEST,
});

export const getStoreSuccess = (payload: any): any => ({
  type: GET_STORE_SUCCESS,
  payload,
});

export const getStoreFailure = (payload: any): any => ({
  type: GET_STORE_FAILURE,
  payload,
});

export const getCommitmentsRequest = (payload: any): any => ({
  type: GET_COMMITMENTS_REQUEST,
  payload,
});

export const getCommitmentsSuccess = (payload: any): any => ({
  type: GET_COMMITMENTS_SUCCESS,
  payload,
});

export const getCommitmentsFailure = (payload: any): any => ({
  type: GET_COMMITMENTS_FAILURE,
  payload,
});
