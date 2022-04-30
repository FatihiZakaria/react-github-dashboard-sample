import {
    UserDispatchTypes,
    UserType,
    USER_LOADING,
    USER_FAIL,
    USER_SUCCESS,
    USER_RESET_ERROR,
} from '../actionsTypes/UserActionTypes';

export interface InitialStateI {
    loading: boolean;
    userInfos?: UserType | null;
    error: string;
}

const initialState: InitialStateI = {
    loading: false,
    userInfos: null,
    error: '',
};

const userReducer = (
    state: InitialStateI = initialState,
    action: UserDispatchTypes,
): InitialStateI => {
    switch (action.type) {
        case USER_FAIL:
            return {
                loading: false,
                userInfos: null,
                error: action.payload,
            };
        case USER_LOADING:
            return {
                loading: true,
                userInfos: null,
                error: '',
            };
        case USER_SUCCESS:
            return {
                loading: false,
                userInfos: action.payload,
                error: '',
            };
        case USER_RESET_ERROR:
            return {
                loading: false,
                userInfos: state.userInfos,
                error: '',
            };
        default:
            return state;
    }
};

export default userReducer;
