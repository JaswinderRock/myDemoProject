import React, { Component } from 'react';
import '../css/profile.css';
import { Link } from 'react-router-dom';
import UserLogo from '../images/userlogo.png';

class UserDetails extends Component {

    render() {
        return (
            <div className='card' style={{ borderRadius: "4px" }}>
                <h2 style={{ paddingTop: '40px', fontSize: '28px' }}>User Details</h2>
                <img src={UserLogo} alt="John" style={{ width: "60%", marginTop: '20px' }} />
                <h1>Miss Jazz</h1>
                <p className="title"> Software Engineer</p>
                <p> Reckonsys Tech Labs</p>
                <button style={{ marginTop: '10px' }}><Link to="/dashboard" style={{ color: 'white' }}>Close</Link></button>
            </div>
        )
    }
}
export default UserDetails;