import { Dispatch } from 'redux';
import axios from 'axios';
import {
    UserDispatchTypes,
    USER_LOADING,
    USER_FAIL,
    USER_SUCCESS,
} from '../../../redux/actionsTypes/UserActionTypes';
import { API_URLS } from '../../../config';
import { UserMapper } from '../../../adapters/secondary/user/mappers/UserMapper';

export const getUserInfosUseCase =
    (username: string): any =>
    async (dispatch: Dispatch<UserDispatchTypes>) => {
        try {
            dispatch({ type: USER_LOADING });
            const getUserApiUrl = API_URLS.GET_USER.replace('{username}', username);
            const getUserRepositoriesApiUrl = API_URLS.GET_USER_REPOSITORIES.replace(
                '{username}',
                username,
            );
            const user = await axios.get(getUserApiUrl);
            const repositories = await axios.get(getUserRepositoriesApiUrl);
            const res = UserMapper.toModel(user.data, repositories.data);
            dispatch({ type: USER_SUCCESS, payload: res });
        } catch (e: any) {
            dispatch({ type: USER_FAIL, payload: e.message });
        }
    };
