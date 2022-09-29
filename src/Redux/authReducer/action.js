import * as types from './actionTypes'
import axios from 'axios'


const login = (payload)=> dispatch=>{
    dispatch({type:types.USER_LOGIN_REQUEST})
    return axios.post("https://masai-api-mocker.herokuapp.com/auth/login",payload)
    .then((r)=>{
     return dispatch({type:types.USER_LOGIN_SUCCESS,payload:r.data.token})
    })
    .catch((err)=>{
      dispatch({type:types.USER_LOGIN_FAILURE,payload:err})
    })
  }
  export {login}