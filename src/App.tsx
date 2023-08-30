import { Component } from 'react';
import React from 'react';
import './css/App.css'
import LoginPage from './Componets/LoginPage';
import { Link, Route, Routes } from 'react-router-dom';
import ProfilePage from './Componets/ProfilePage';
import Dashboard from './Componets/Dashboard';
import UserDetails from './Componets/UserDetail';
import { connect } from "react-redux";
import { isLogin } from './Redux/Actions/action';
interface AppProps {
    login: boolean,
}
class App extends Component<AppProps> {
    handleLogout = () => {
        this.setState(!this.props.login);
    };
    render() {
        const loginCheck = this.props.login
        return (
            <>
                <div className="header">
                    <a href="#default" className="logo">React with Typescript </a>
                    <div className="header-right">
                        <>
                            {loginCheck ?
                                <>
                                    <Link className="active" style={{ fontSize: '24px' }} to="dashboard">DashBoard</Link>
                                    <Link style={{ fontSize: '24px' }} to="profile">Profile</Link>
                                    <Link style={{ fontSize: '24px' }} to="login" onClick={this.handleLogout}>Logout</Link>
                                </> : <Link style={{ fontSize: '24px' }} to="login">Login</Link>}
                        </>
                    </div>
                </div>
                <Routes>
                    <Route path='login' element={< LoginPage />} />
                    <Route path='dashboard' element={<Dashboard loggedInUsers={[]} id={1} />} />
                    <Route path='profile' element={<ProfilePage />} />
                    <Route path="/userDetails" element={<UserDetails />} />
                </Routes>
            </>
        );
    }
}
const mapStateToProps = (state: any) => ({
    login: state.login,
});

export default connect(mapStateToProps, { isLogin })(App);
