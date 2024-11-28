// import { USER_PERMISSION } from "~/constants/Permission";
// import { UserProfile } from "./../../model/UserProfile";
import { GET_DEAL_FAILURE, GET_DEAL_REQUEST, GET_DEAL_SUCCESS } from "./actionTypes";
import { USERState } from "./types";

const initialState: any = {
  status: "",
  dataUser: {},
  dataRef: {},
  dataInfoCard: null,
  error: null,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case GET_DEAL_REQUEST:
      return {
        ...state,
        status: "start",
        dataUser: action.payload,
      };
    case GET_DEAL_SUCCESS:
      return {
        ...state,
        status: "done",
        dataRef: { ...state.dataUser },
        dataUser: { ...state.dataRef, ...action.payload.payload },
      };
    case GET_DEAL_FAILURE:
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
