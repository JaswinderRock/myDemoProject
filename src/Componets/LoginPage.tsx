import React, { Component } from 'react';

interface LoginPageState {
    isLoggedIn: boolean;
    email: string;
    password: string;
}

class LoginPage extends Component<{}, LoginPageState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            isLoggedIn: false,
            email: '',
            password: '',
        };
    }

    handleLogin = (e: React.FormEvent) => {
        this.setState({ isLoggedIn: true });
        e.preventDefault();
        const validationStatus = this.validateForm();

        if (validationStatus === false) {
            alert('Plase fill all the required fields')
        }
        console.log(this.state);
    };

    handleLogout = () => {
        this.setState({ isLoggedIn: false });
    };

    render() {
        const { email, password } = this.state;

        return (
            <div>
                {this.state.isLoggedIn ? (
                    <div>
                        <h2>Welcome to the Profile Page</h2>
                        <div>{this.state.email}</div>
                        <button onClick={this.handleLogout}>Logout</button>
                    </div>
                ) : (
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
                                <button onClick={this.handleLogin} className='submitbutton'>Login</button>
                            </div>
                        </div>
                    </div>
                )}
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

export default LoginPage;
