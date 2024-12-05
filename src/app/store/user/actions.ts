import {
  GET_DEAL_REQUEST,
  GET_DEAL_SUCCESS,
  GET_DEAL_FAILURE,
  GET_DATA_DEAL_SUCCESS,
  GET_DATA_DEAL_FAILURE,
  GET_DATA_DEAL_REQUEST,
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
