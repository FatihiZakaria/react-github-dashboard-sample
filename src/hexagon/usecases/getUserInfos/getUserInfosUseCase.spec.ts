import { EmptyObject } from 'redux';
import store, { configureStore, RootStore } from '../../../redux/Store';
import { getUserInfosUseCase } from './getUserInfosUseCase';
import axios from 'axios';
import { API_URLS } from '../../../config';
import { expectedUserData, someUser } from '../stubs/someUser';
import { expectedReposData, someRepos } from '../stubs/someRepos';
import { InitialStateI } from '../../../redux/reducers/UserReducer';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('User Github - test getUserInfosUseCase', () => {
    let initialState: { user: InitialStateI };
    beforeEach(() => {
        initialState = store.getState();
    });

    afterEach(() => {
        mockedAxios.delete.mockClear();
    });

    it('store should have initial state', () => {
        const expectedInitialstate = { user: { loading: false, userInfos: null, error: '' } };
        expect(initialState).toEqual(expectedInitialstate);
    });

    it('loading should be true', () => {
        store.dispatch(getUserInfosUseCase('zak'));
        const state = store.getState();
        expect(state.user.loading).toEqual(true);
    });

    it('store should dispatch action', async () => {
        const username = 'zak';
        const getUserApiUrl = API_URLS.GET_USER.replace('{username}', username);
        const getUserRepositoriesApiUrl = API_URLS.GET_USER_REPOSITORIES.replace(
            '{username}',
            username,
        );
        const responseForUser = {
            data: someUser,
            status: 200,
            statusText: 'Ok',
            headers: {},
            config: {},
        };
        const responseForRepos = {
            data: someRepos,
            status: 200,
            statusText: 'Ok',
            headers: {},
            config: {},
        };
        mockedAxios.get.mockImplementation(async (url) => {
            if (url === getUserApiUrl) {
                return Promise.resolve(responseForUser);
            } else if (url === getUserRepositoriesApiUrl) {
                return Promise.resolve(responseForRepos);
            }
        });

        await store.dispatch(getUserInfosUseCase('zak'));

        const state = store.getState();
        const userInfos = state.user.userInfos;
        const error = state.user.error;
        const loading = state.user.loading;

        expect(userInfos?.user).toEqual(expectedUserData);
        expect(userInfos?.repositories).toEqual(expectedReposData);
        expect(error).toEqual('');
        expect(loading).toEqual(false);
    });

    it('should catch error', async () => {
        const errorMessage = 'user not found';
        const err = new Error(errorMessage);
        mockedAxios.get.mockRejectedValueOnce(err);

        await store.dispatch(getUserInfosUseCase('zak'));

        const state = store.getState();
        const userInfos = state.user.userInfos;
        const error = state.user.error;
        const loading = state.user.loading;

        expect(userInfos).toEqual(null);
        expect(error).toEqual(errorMessage);
        expect(loading).toEqual(false);
    });
});
