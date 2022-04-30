import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { FunctionComponent } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Search from './Search/Search';
import User from './User/User';
import Repository from './Repository/Repository';

const App: FunctionComponent = () => (
    <>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Navigate to="/react-github-dashboard-sample" />} />
                <Route path="/react-github-dashboard-sample" element={<Search />} />
                <Route path="/user" element={<User />} />
                <Route path="/repository/:id" element={<Repository />} />
            </Routes>
        </BrowserRouter>
    </>
);

export default App;
