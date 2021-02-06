import userApi from "../api/userApi"
import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS
} from "../constants/userConstants"
export const actionSignup = (user) => {
  return async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST })
    try {
      const res = await userApi.signup(user)
      const { token, refreshToken } = res.data
      const { email, name, role, cart } = res.data.result
      const userInfo = {
        name, email, role, cart
      }
      dispatch({ type: REGISTER_SUCCESS, payload: res.data.result })
      if (token) {
        localStorage.setItem('token', JSON.stringify(token))
        localStorage.setItem('refresh-token', JSON.stringify(refreshToken))
        localStorage.setItem('userInfo', JSON.stringify(userInfo))
      }
      return res
    }
    catch (error) {
      dispatch({ type: REGISTER_FAIL })
      return Promise.reject(error.response.data.message)
    }
  }
}

export const actionLogin = (user) => {
  return async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST })
    try {
      const res = await userApi.login(user)
      const { token, refreshToken } = res.data
      const { email, name, role, cart } = res.data.result
      const userInfo = {
        name, email, role, cart
      }
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.result })
      if (token) {
        localStorage.setItem('token', JSON.stringify(token))
        localStorage.setItem('refresh-token', JSON.stringify(refreshToken))
        localStorage.setItem('userInfo', JSON.stringify(userInfo))
      }
      return res
    }
    catch (error) {
      dispatch({ type: LOGIN_FAIL })
      return Promise.reject(error.response.data.message)
    }
  }
}
export const actionSignOut = () => {
  return async (dispatch) => {
    dispatch({ type: LOGOUT_REQUEST })
    try {
      const res = await userApi.logout()
      console.log(res);
      dispatch({ type: LOGOUT_SUCCESS })
      return res
    }
    catch (error) {
      dispatch({ type: LOGOUT_FAIL })
      return error
    }
  }
}