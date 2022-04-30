import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

const Header: FunctionComponent = () => (
    <>
        <div className="container-fluid bg-primary">
            <header className="d-flex justify-content-center py-3">
                <h1 className="text-white">
                    <Link to="/react-github-dashboard-sample" className="custom-header">
                        <span>Github Dashboard Sample</span>
                    </Link>
                </h1>
            </header>
        </div>
    </>
);

export default Header;
