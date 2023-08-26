import React, { Component } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import LoginPage from './Componets/LoginPage';
import ProfilePage from './Componets/ProfilePage';
import Dashboard from './Componets/Dashboard';

class AppRouter extends Component {
    render() {
        return (
            <>
                <h1>hello</h1>
                <Routes>
                    <Route path="/" element={LoginPage as any} />
                    <Route path="/profile" element={ProfilePage as any} />
                    <Route path="/dashboard" element={Dashboard as any} />
                </Routes>
            </>
        );
    }
}

export default AppRouter;
