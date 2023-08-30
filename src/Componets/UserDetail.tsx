import React, { Component } from 'react';
import '../css/profile.css';
import { Link } from 'react-router-dom';
import UserLogo from '../images/userlogo.png';
import { connect } from 'react-redux';
import { setUserId } from '../Redux/Actions/action';

interface userProps {
    userid: string,
    userList: Array<{
        firstName: string;
        lastName: string;
        email: string;
        companyName: string;
        occupation: string;
        id: string
    }>
}
class UserDetails extends Component<userProps> {
    render() {
        const reduxUserId = this.props.userid;
        const { userList } = this.props;
        const matchingUser = userList.filter((user) => {
            return user.id.toString() === reduxUserId;
        });
        return (
            <>
                {matchingUser &&
                    <div className='card' style={{ borderRadius: "4px" }}>
                        <h2 style={{ paddingTop: '40px', fontSize: '28px' }}>User Details</h2>
                        <img src={UserLogo} alt="John" style={{ width: "60%", marginTop: '20px' }} />
                        <h1>{matchingUser[0].firstName} {matchingUser[0].lastName}</h1>
                        <p className="title"> {matchingUser[0].occupation}</p>
                        <p>{matchingUser[0].companyName}</p>
                        <button style={{ marginTop: '10px' }}><Link to="/dashboard" style={{ color: 'white' }}>Close</Link></button>
                    </div>
                }
            </>

        )
    }
}
function mapStateToProps(state: any) {
    return {
        userid: state.userid,
        userList: state.userList
    };
}

export default connect(mapStateToProps, { setUserId })(UserDetails);