import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { RootStore } from '../../../redux/Store';

const User: FunctionComponent = () => {
    const appState = useSelector((state: RootStore) => state.user);
    const { userInfos } = appState;
    const user = userInfos?.user;
    const repositories = userInfos?.repositories;

    const listRepositories = repositories?.map((r) => (
        <li key={r.id} className="list-group-item">
            <Link to={`/repository/${r.id}`}>{r.name}</Link>
        </li>
    ));

    return (
        <>
            {!userInfos && <Navigate replace to="/react-github-dashboard-sample" />}
            <div className="container">
                <div className="row">
                    <div className="mt-80">
                        <div className="card bg-white d-flex align-items-center justify-content-center ">
                            <div className="w-100">
                                <img src={user?.avatar_url} alt="" className="rounded-circle" />
                            </div>
                            <div className="text-center ">
                                <p className="name">{user?.name}</p>
                                <div className="mt-5">
                                    <p className="mb-0">List of repositories</p>
                                    <ul className="list-group mb-2">{listRepositories}</ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default User;
