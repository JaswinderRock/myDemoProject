import { BlobOptions } from "buffer";
import { ActionType, isLogin } from "../Actions/action";

export interface State {
    userList: Array<Object>
    userid: string,
    login: Boolean
}

const initialState: State = {
    userList: [{
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
            firstName: 'Mera',
            lastName: 'Khan',
            email: 'khan@gmail.com',
            companyName: 'Clir Renewables',
            occupation: 'Software Manager',
            id: 5
        },
        {
            firstName: 'khushal',
            lastName: 'kumar',
            email: 'kumar@gmail.com',
            companyName: 'Kaiko',
            occupation: 'Project Lead',
            id: 6
        },
        {
            firstName: 'Miss',
            lastName: 'Surekha',
            email: 'surekha@gmail.com',
            companyName: 'Reckonsys Tech Labs',
            occupation: 'Software Engineer',
            id: 7
        }],
    userid: "",
    login: false
};

const reducer = (state = initialState, action: any) => {
    console.log("action", action.payload)
    switch (action.type) {
        case ActionType.ADD_USER:
            return {
                ...state,
                userList: [...state.userList, action.payload],
            };
        case ActionType.USER_ID:
            return {
                ...state,
                userid: action.payload,
            };
        case ActionType.IS_LOGIN:
            return {
                ...state,
                login: !state.login,
            };
        default:
            return state;
    }
};

export default reducer;
