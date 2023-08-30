export enum ActionType {
    ADD_USER = "ADD_USER",
    USER_ID = 'USER_ID',
    IS_LOGIN = 'IS_LOGIN'
}

export const addNewUser = (payload: object) => ({
    type: ActionType.ADD_USER,
    payload: payload,
});
export const setUserId = (payload: string) => ({
    type: ActionType.USER_ID,
    payload: payload
});
export const isLogin = () => ({
    type: ActionType.IS_LOGIN
});

