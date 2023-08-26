import { ActionType } from "../Actions/action";

export interface State {
    userList: Array<Object>
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
    }]
};

const reducer = (state = initialState, action: any) => {
    console.log("action", action.payload)
    switch (action.type) {
        case ActionType.ADD_USER:
            return {
                ...state,
                userList: [...state.userList, action.payload],
            };
        default:
            return state;
    }
};

export default reducer;
