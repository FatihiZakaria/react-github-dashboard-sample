import React, { FunctionComponent, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, Navigate, useParams } from 'react-router-dom';
import { UserRepositories, USER_RESET_ERROR } from '../../../redux/actionsTypes/UserActionTypes';
import { RootStore } from '../../../redux/Store';

const Repository: FunctionComponent = () => {
    const { id } = useParams();
    const repoId: number = id ? parseInt(id, 10) : 0;
    const appState = useSelector((state: RootStore) => state.user);
    const { userInfos } = appState;
    const repositories: UserRepositories[] | undefined = userInfos?.repositories;
    const repository: UserRepositories | undefined = repositories?.filter(
        (r) => r.id === repoId,
    )[0];

    return (
        <>
            {!userInfos && <Navigate replace to="/react-github-dashboard-sample" />}
            <div className="container">
                <div className="row">
                    <div className="mt-80">
                        <div className="card bg-white d-flex align-items-center justify-content-center ">
                            <table className="table table-borderless">
                                <tr>
                                    <td className="fw-bold">Name</td>
                                    <td>{repository?.name}</td>
                                </tr>
                                <tr>
                                    <td className="fw-bold">Language</td>
                                    <td>{repository?.language}</td>
                                </tr>
                                <tr>
                                    <td className="fw-bold">Stars</td>
                                    <td>{repository?.stargazers_count}</td>
                                </tr>
                                <tr>
                                    <td className="fw-bold">Description</td>
                                    <td>{repository?.description}</td>
                                </tr>
                                <tr>
                                    <td className="fw-bold">CreatedAt</td>
                                    <td>{repository?.created_at}</td>
                                </tr>
                                <tr>
                                    <td className="fw-bold">UpdatedAt</td>
                                    <td>{repository?.updated_at}</td>
                                </tr>
                                <tr>
                                    <td className="fw-bold">Link github</td>
                                    <td>
                                        <a
                                            href={repository?.html_url}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {repository?.html_url}
                                        </a>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Repository;
