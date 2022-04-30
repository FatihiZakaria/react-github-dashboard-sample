import React, { FunctionComponent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getUserInfosUseCase } from '../../../hexagon/usecases/getUserInfos/getUserInfosUseCase';
import { USER_RESET_ERROR } from '../../../redux/actionsTypes/UserActionTypes';
import { RootStore } from '../../../redux/Store';

const Search: FunctionComponent = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState<string>('');
    const [redirect, setRedirect] = useState<boolean>(false);
    const appState = useSelector((state: RootStore) => state.user);
    const { loading, error, userInfos } = appState;

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        if (error) dispatch({ type: USER_RESET_ERROR });
        const newValue = e.currentTarget.value;
        setUsername(newValue);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(await getUserInfosUseCase(username));
        setRedirect(true);
    };

    const shouldRedirect = redirect && username && userInfos;

    return (
        <>
            {shouldRedirect && <Navigate replace to="/user" />}
            <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
                <form className="d-flex" onSubmit={handleSubmit}>
                    <input
                        type="search"
                        className="form-control rounded"
                        placeholder="Github username"
                        value={username}
                        onChange={handleChange}
                    />
                    <button
                        type="submit"
                        className="btn btn-outline-primary mlbtn-5"
                        disabled={!username}
                    >
                        search
                    </button>
                </form>
                {loading && <div className="spinner-border text-primary mt-1" />}
                {error && <p className="text-danger">{error}</p>}
            </div>
        </>
    );
};

export default Search;
