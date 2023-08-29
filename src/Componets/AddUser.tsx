import React, { Component, FormEvent } from 'react';
import '../css/model.css';
import CloseIcon from '../images/close.svg';
import { connect } from "react-redux";
import { addNewUser } from '../Redux/Actions/action';


interface AddUserState {
    firstName: string;
    lastName: string;
    email: string;
    companyName: string;
    occupation: string;
}

interface AddUserProps {
    addNewUser: (users: object) => void;
    showModal: boolean
    closeModel: () => void,
    userList: Array<{
        id: number
    }>
}


class AddUser extends Component<AddUserProps, AddUserState> {
    constructor(props: AddUserProps) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            companyName: '',
            occupation: '',
        };
    }
    handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const { firstName, lastName, email, companyName, occupation } = this.state;
        const { addNewUser, userList, closeModel } = this.props;
        let obj = { firstName, lastName, email, companyName, occupation, id: userList[userList.length - 1].id + 1 }
        addNewUser(obj)
        closeModel()
    };
    render() {
        const { firstName, lastName, email, companyName, occupation } = this.state;
        return (
            <>
                <div className={`modal add-model ${this.props.showModal ? "show" : ""}`}>
                    <div className="modal__container modal__container" style={{ width: 545, background: 'white' }}>
                        <div
                            className="header"
                            style={{
                                paddingLeft: '20px',
                                paddingRight: '20px',
                                height: '30px',
                                borderBottom: "1px solid rgb(0 0 0 / 10%)",
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                                <div style={{ marginTop: '-22px' }}>
                                    <h2 className="text-lg font-semibold">Add New User</h2>
                                </div>
                                <div className="modal__close-icon" style={{ cursor: 'pointer' }} onClick={this.props.closeModel}>
                                    <img src={CloseIcon} alt="" height={"18px"} width={"18px"} />
                                </div>
                            </div>

                        </div>
                        <div className="modal__body" style={{ padding: "20px" }}>
                            <form onSubmit={this.handleSubmit}>
                                <div>
                                    <div style={{ marginTop: '24px' }}>
                                        <label style={{ display: 'block', fontSize: '16px', color: '#374957', marginBottom: '10px', fontWeight: '600', fontFamily: 'sans-serif' }}>
                                            FirstName
                                        </label>
                                        <input
                                            style={{ width: '90%', padding: '10px', border: '1px solid #dedede', borderRadius: '4px', fontSize: '16px' }}
                                            placeholder="Enter firstName"
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            value={firstName}
                                            onChange={e => this.setState({ firstName: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div style={{ marginTop: '24px' }}>
                                        <label style={{ display: 'block', fontSize: '16px', color: '#374957', marginBottom: '10px', fontWeight: '600', fontFamily: 'sans-serif' }}>
                                            LastName
                                        </label>
                                        <input
                                            style={{ width: '90%', padding: '10px', border: '1px solid #dedede', borderRadius: '4px', fontSize: '16px' }}
                                            placeholder='Enter lastName'
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            value={lastName}
                                            onChange={e => this.setState({ lastName: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div style={{ marginTop: '24px' }}>
                                        <label style={{ display: 'block', fontSize: '16px', color: '#374957', marginBottom: '10px', fontWeight: '600', fontFamily: 'sans-serif' }}>
                                            Email
                                        </label>
                                        <input
                                            style={{ width: '90%', padding: '10px', border: '1px solid #dedede', borderRadius: '4px', fontSize: '16px' }}
                                            placeholder='Enter your email'
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={email}
                                            onChange={e => this.setState({ email: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div style={{ marginTop: '24px' }}>
                                        <label style={{ display: 'block', fontSize: '16px', color: '#374957', marginBottom: '10px', fontWeight: '600', fontFamily: 'sans-serif' }}>
                                            CompanyName
                                        </label>
                                        <input
                                            style={{ width: '90%', padding: '10px', border: '1px solid #dedede', borderRadius: '4px', fontSize: '16px' }}
                                            placeholder='Enter your company name'
                                            type="text"
                                            id="companyName"
                                            name="companyName"
                                            value={companyName}
                                            onChange={e => this.setState({ companyName: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div style={{ marginTop: '24px' }}>
                                        <label style={{ display: 'block', fontSize: '16px', color: '#374957', marginBottom: '10px', fontWeight: '600', fontFamily: 'sans-serif' }}>
                                            Occupation
                                        </label>
                                        <input
                                            style={{ width: '90%', padding: '10px', border: '1px solid #dedede', borderRadius: '4px', fontSize: '16px' }}
                                            placeholder='Enter your occupation'
                                            type="text"
                                            id="occupation"
                                            name="occupation"
                                            value={occupation}
                                            onChange={e => this.setState({ occupation: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '40px' }}>
                                        <button
                                            className="btn cursor-pointer"
                                            type="button"
                                            name="cancle-btn"
                                            style={{ cursor: 'pointer', borderRadius: '4px', marginRight: '20px', marginLeft: '20px', border: '1px solid black', background: 'white', color: 'black' }}
                                            onClick={this.props.closeModel}
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            className="btn ml-4 cursor-pointer"
                                            type="submit"
                                            style={{ cursor: 'pointer', borderRadius: '4px', marginRight: '20px', marginLeft: '20px', }}
                                        >
                                            Add User
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div >
                </div >
            </>
        )
    }
}
function mapStateToProps(state: any) {
    return { userList: state.userList };
}

export default connect(mapStateToProps, { addNewUser })(AddUser);