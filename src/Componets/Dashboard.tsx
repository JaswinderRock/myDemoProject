import React, { Component } from 'react';
import '../css/dashboard.css';
import { connect } from "react-redux";
import AddUser from './AddUser';

interface DashboardProps {
    loggedInUsers: string[];
    userList: Array<{
        firstName: string;
        lastName: string;
        email: string;
        companyName: string;
        occupation: string;
        id: number
    }>
}
interface DashboardState {
    userData: Array<Object>
    showModel: boolean
}

class Dashboard extends Component<DashboardProps, DashboardState> {
    state = {
        showModel: false,
        userData: [
            {
                firstName: 'John',
                lastName: 'Doe',
                email: 'john.doe@example.com',
                companyName: 'Acme Inc.',
                occupation: 'Software Engineer',
                id: 1
            },
            {
                firstName: 'Jane',
                lastName: 'Smith',
                email: 'jane.smith@example.com',
                companyName: 'TechCorp',
                occupation: 'Data Scientist',
                id: 2
            },
            {
                firstName: 'Bob',
                lastName: 'Johnson',
                email: 'bob.johnson@example.com',
                companyName: 'GlobalTech',
                occupation: 'Product Manager',
                id: 3
            },
            {
                firstName: 'Miss',
                lastName: 'Jazz',
                email: 'Jazz@gmail.com',
                companyName: 'Reckonsys Tech Labs',
                occupation: 'Software Engineer',
                id: 4
            },
            {
                firstName: 'Miss',
                lastName: 'Surekha',
                email: 'surekha@gmail.com',
                companyName: 'Reckonsys Tech Labs',
                occupation: 'Software Engineer',
                id: 5
            }
        ]
    };
    render() {
        return (
            <div style={{ background: '#f1f1f1' }}>
                <div style={{ marginLeft: '24px', display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ alignItems: 'center' }}>
                        <h2>UserList:</h2>
                    </div>
                    <div style={{ alignItems: 'center', paddingRight: '30px' }}>
                        <button style={{ borderRadius: '6px' }} onClick={() => this.setState({ showModel: !this.state.showModel })}>Add User</button>
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
                            {this.props.userList.map((user) => (
                                <>
                                    <tr style={{ backgroundColor: 'white', cursor: 'pointer', height: '40px' }}>
                                        <td style={{ paddingLeft: '20px' }}>{user.id}</td>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.email}</td>
                                        <td>{user.occupation}</td>
                                        <td>{user.companyName}</td>
                                    </tr>
                                    <tr style={{ backgroundColor: 'transparent', height: '4px' }}></tr>
                                </>
                            ))}
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

export default connect(mapStateToProps, {})(Dashboard);
