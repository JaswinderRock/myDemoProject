import React, { Component } from 'react';
import '../css/profile.css';
import ProfileLogo from '../images/profilelogo.png';


class ProfilePage extends Component {
    render() {
        return (
            <div className='card'>
                <h2 style={{ paddingTop: '20px' }}> My Profile</h2>
                <img src={ProfileLogo} alt="John" style={{ width: "100%" }} />
                <h1>Miss Jazz</h1>
                <p className="title"> Software Engineer</p>
                <p> Reckonsys Tech Labs</p>
                <button>Close</button>
            </div>
        )
    }
}
export default ProfilePage;