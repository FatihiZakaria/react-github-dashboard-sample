export const USER_LOADING = 'USER_LOADING';
export const USER_FAIL = 'USER_FAIL';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_RESET_ERROR = 'USER_RESET_ERROR';

export type UserType = {
    user: UserDetails;
    repositories: UserRepositories[];
};

export type UserDetails = {
    name: string;
    avatar_url: string;
};

export type UserRepositories = {
    id: number;
    name: string;
    language: string;
    stargazers_count: number;
    description: string;
    created_at: string;
    updated_at: string;
    html_url: string;
};

export interface UserLoading {
    type: typeof USER_LOADING;
}

export interface UserFail {
    type: typeof USER_FAIL;
    payload: string;
}

export interface UserSuccess {
    type: typeof USER_SUCCESS;
    payload: UserType;
}

export interface UserResetError {
    type: typeof USER_RESET_ERROR;
}

export type UserDispatchTypes = UserLoading | UserFail | UserSuccess | UserResetError;
