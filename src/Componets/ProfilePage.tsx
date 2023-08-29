import React, { Component } from 'react';
import '../css/profile.css';
import ProfileLogo from '../images/profilelogo.png';
import { Link } from 'react-router-dom';

class ProfilePage extends Component {

    render() {
        return (
            <div className='card' style={{ borderRadius: "4px" }}>
                <h2 style={{ paddingTop: '20px', fontSize: '28px' }}> My Profile</h2>
                <img src={ProfileLogo} alt="John" style={{ width: "90%" }} />
                <h1>Miss Jazz</h1>
                <p className="title">Software Engineer</p>
                <p>Reckonsys Tech Labs</p>
                <button><Link to="/dashboard" style={{ color: 'white' }}>Close</Link></button>
            </div>
        )
    }
}
export default ProfilePage;