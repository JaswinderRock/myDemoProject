import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { isLogin } from '../Redux/Actions/action';

interface LoginPageState {
    email: string;
    password: string;
}
interface LoginProps {
    isLogin: () => void,
    login: boolean
}

class LoginPage extends Component<LoginProps, LoginPageState> {
    state = {
            email: '',
        password: ''
    };

    handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        const validationStatus = this.validateForm();
        if (validationStatus === false) {
            alert('Plase fill all the required fields')
        }
        this.props.isLogin();
        console.log(this.state);
    };

    render() {
        const { email, password } = this.state;
        return (
            <div>

                    <div className="Login">
                        <div className='LoginBox'>
                            <div className='LoginHeader'>
                                Login
                            </div>
                            <div className='inputs'>
                                <input
                                    className='email'
                                    placeholder='Enter Your Email'
                                    type='email'
                                    value={email}
                                    onChange={e => this.setState({ email: e.target.value })} />
                                <input
                                    className='password'
                                    placeholder='Enter Your Password'
                                    type='password'
                                    value={password}
                                    onChange={e => this.setState({ password: e.target.value })} />
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <button onClick={this.handleLogin} className='submitbutton'> <Link to="/dashboard" style={{ color: 'white' }}>Login</Link></button>
                            </div>
                        </div>
                </div>
            </div>
        );
    }

    validateForm = () => {
        const { email, password } = this.state
        let status = true;
        if (email.length === 0) {
            status = false;
        }
        if (password.length === 0) {
            status = false;
        }
        return status;
    }
}
function mapStateToProps(state: any) {
    return { login: state.login };
}
export default connect(mapStateToProps, { isLogin })(LoginPage);
