import { createStore, Action, applyMiddleware, Store } from 'redux';
import thunk, { ThunkAction, ThunkDispatch, ThunkMiddleware } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import RootReducer from './reducers/RootReducer';
import { InitialStateI } from './reducers/UserReducer';

export const configureStore = () =>
    createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootStore = ReturnType<typeof RootReducer>;

const store = configureStore();

export default store;
