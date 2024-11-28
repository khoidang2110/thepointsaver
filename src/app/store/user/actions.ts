import { GET_DEAL_REQUEST, GET_DEAL_SUCCESS, GET_DEAL_FAILURE } from "./actionTypes";

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
