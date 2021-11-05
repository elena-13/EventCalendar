import axios from "axios";
import { AppDispatch } from "../..";
import { IUser } from "../../../models/IUser";
import { AuthActionEnum, SetUserAction, SetAuthAction, SetErrorAction, SetIsLoadingAction } from "./types";

export const AuthActionCreators = {
  setUser: (user: IUser): SetUserAction => ({type: AuthActionEnum.SET_USER, payload: user}),
  setIsAuth: (auth: boolean): SetAuthAction => ({type: AuthActionEnum.SET_AUTH, payload: auth}),
  setIsLoading: (payload: boolean): SetIsLoadingAction => ({type: AuthActionEnum.SET_IS_LOADING, payload}),
  setError: (payload: string): SetErrorAction => ({type: AuthActionEnum.SET_ERROR, payload}),
  login: (username: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(AuthActionCreators.setIsLoading(true));
      const response = await axios.get<IUser[]>('./users.json');
      const mockUser = response.data.find(user => user.username === username && user.password === password);
      if (mockUser) {
        localStorage.setItem('auth', 'true');
        localStorage.setItem('username', mockUser.username);
        dispatch(AuthActionCreators.setIsAuth(true));
        dispatch(AuthActionCreators.setUser(mockUser));
      } else {
        dispatch(AuthActionCreators.setError('Lodig or password are incorrect'));
      }
      dispatch(AuthActionCreators.setIsLoading(false));
    } catch(e) {
      dispatch(AuthActionCreators.setError('Error occurred'))
    }
  },
  logout: () => async (dispatch: AppDispatch) => {
    try {

    } catch {

    }
  }
}