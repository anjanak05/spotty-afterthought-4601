import * as types from './actionTypes'
import axios from 'axios'


const login = (payload)=> dispatch=>{
// let username = payload.username  
// const navigate = useNavigate()


  console.log(payload.username)
    dispatch({type:types.USER_LOGIN_REQUEST})
    return axios.post("https://masai-api-mocker.herokuapp.com/auth/login", payload.loginData)
    .then((r)=>{
      console.log(r)
   return dispatch({type:types.USER_LOGIN_SUCCESS, payload:r.data.token})
    
    })
    .catch((err)=>{
      dispatch({type:types.USER_LOGIN_FAILURE,payload:err})
    })
  }
  export {login}

  const register = (payload)=> dispatch=>{
    console.log(payload)
      dispatch({type:types.USER_LOGIN_REQUEST})
      return axios.post("https://masai-api-mocker.herokuapp.com/auth/register", payload)
      .then((r)=>{
        console.log(r)
       return dispatch({type:types.USER_SIGNUP_SUCCESS, payload:r.data})
      })
      .catch((err)=>{
        dispatch({type:types.USER_LOGIN_FAILURE,payload:err})
      })
    }
export{register}