import * as  types from "./actionTypes"

const iniState = {
  isAuth:false,
  isLoading:false,
  isError:false,
  token:""
};
export const reducer = (state = iniState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.USER_LOGIN_REQUEST:
      return {
          ...iniState,
          isLoading:true
      } 
   
      case types.USER_LOGIN_SUCCESS:
          return {
              ...iniState,
              isLoading:false,
              token:payload,
              isAuth:true
          } 
   
          case types.USER_LOGIN_FAILURE:
              return {
                  ...iniState,
                  isLoading:false,
                  isAuth:false,
                  token:""
      
              } 
    default:
      return state;
  }
};
