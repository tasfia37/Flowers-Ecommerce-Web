import * as actionTypes from "./action-type"


const initialLoginState = {
  loginUsername : '',
  loginId: null,
  isAuth : false
}

export const loginReducer = (state = initialLoginState, action) =>{
  switch(action.type){
    case actionTypes.LoginStatus:
      return{
        ...state,
        loginUsername : action.payload.usernameValue,
        loginId : action.payload.idValue,
        isAuth : true
      }

    case actionTypes.LogoutStatus:
      // localStorage.setItem('isAuth',false)
      return{
        ...state,
        loginUsername : '',
        loginId : null,
        isAuth : false
      }

    default:
      return state
  }
}
