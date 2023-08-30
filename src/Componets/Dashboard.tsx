import React, { Component } from 'react';
import '../css/dashboard.css';
import { connect } from "react-redux";
import AddUser from './AddUser';
import { Link } from 'react-router-dom';
import { setUserId } from '../Redux/Actions/action';

interface DashboardProps {
    loggedInUsers: string[];
    id: number
    userList: Array<{
        firstName: string;
        lastName: string;
        email: string;
        companyName: string;
        occupation: string;
        id: number
    }>
    setUserId: (id: string) => void
}
interface DashboardState {
    showModel: boolean
}

class Dashboard extends Component<DashboardProps, DashboardState> {
    state = {
        showModel: false,
    };

    render() {
        return (
            <div style={{ background: '#f1f1f1' }}>
                <div style={{ marginLeft: '24px', display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ alignItems: 'center' }}>
                        <h2>UserList:</h2>
                    </div>
                    <div style={{ alignItems: 'center', paddingRight: '30px' }}>
                        <button data-test="add-user-button" style={{ borderRadius: '6px' }} onClick={() => this.setState({ showModel: !this.state.showModel })}>Add User</button>
                    </div>
                </div>
                <div style={{ marginLeft: '32px', marginRight: '32px', }}>
                    <table className='table-list-view'>
                        <thead >
                            <tr style={{ height: '60px', backgroundColor: 'white', cursor: 'pointer', font: 'bold', fontWeight: '600', color: 'black', fontSize: 24 }}>
                                <td style={{ paddingLeft: '20px' }}>User Id</td>
                                <td>FirstName</td>
                                <td>LastName</td>
                                <td>Email</td>
                                <td>Occupation</td>
                                <td>CompanyName</td>
                            </tr>
                            <tr style={{ backgroundColor: 'transparent', height: '4px' }}></tr>
                        </thead>
                        <tbody style={{ width: '100%' }}>
                            {this.props.userList.map((item) => {
                                const { firstName, lastName, email, occupation, companyName, id } = item;
                                return (
                                    <React.Fragment key={id}>
                                        <tr style={{ backgroundColor: 'white', cursor: 'pointer', height: '40px' }} onClick={() => this.props.setUserId(id.toString())}>
                                            <td style={{ paddingLeft: '20px', fontSize: '16px' }}>
                                                <Link to={`/userDetails`}>{id}</Link>
                                            </td>
                                            <td>{firstName}</td>
                                            <td>{lastName}</td>
                                            <td>{email}</td>
                                            <td>{occupation}</td>
                                            <td>{companyName}</td>
                                        </tr>
                                        <tr style={{ backgroundColor: 'transparent', height: '4px' }}></tr>
                                    </React.Fragment>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                {this.state.showModel && <AddUser
                    showModal={true} closeModel={() => { this.setState({ showModel: false }) }}
                />}
            </div >
        );
    }
}
function mapStateToProps(state: any) {
    return { userList: state.userList };
}

export default connect(mapStateToProps, { setUserId })(Dashboard);
