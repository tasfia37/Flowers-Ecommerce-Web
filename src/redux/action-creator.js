import axios from 'axios'
import * as actionTypes from "./action-type"


export const Login = (username,id) =>{
  return{
    type : actionTypes.LoginStatus,
    payload : {
      usernameValue : username,
      idValue : id
    }
  }
}

export const Logout = () =>{
  return{
    type : actionTypes.LogoutStatus
  }
}