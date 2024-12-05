// import { USER_PERMISSION } from "~/constants/Permission";
// import { UserProfile } from "./../../model/UserProfile";
import {
  GET_DATA_DEAL_FAILURE,
  GET_DATA_DEAL_REQUEST,
  GET_DATA_DEAL_SUCCESS,
  GET_DEAL_FAILURE,
  GET_DEAL_REQUEST,
  GET_DEAL_SUCCESS,
} from "./actionTypes";
import { USERState } from "./types";

const initialState: any = {
  status: "",
  dataDeal: {},
  payloadDeal: { page: 1, size: 5, data_type: "onSale" },
  data: [],
  error: null,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case GET_DEAL_REQUEST:
      return {
        ...state,
        status: "start",
        dataDeal: action.payload,
      };
    case GET_DEAL_SUCCESS:
      return {
        ...state,
        status: "done",
        dataDeal: action.payload,
      };
    case GET_DEAL_FAILURE:
      return {
        ...state,
        status: "fail",
        error: null,
      };

    case GET_DATA_DEAL_REQUEST:
      return {
        ...state,
        status: "start",
      };
    case GET_DATA_DEAL_SUCCESS:
      return {
        ...state,
        status: "done",
        payloadDeal: { ...state.payloadDeal, ...action.payload },
      };
    case GET_DATA_DEAL_FAILURE:
      return {
        ...state,
        status: "fail",
        error: null,
      };

    default:
      return {
        ...state,
      };
  }
};
