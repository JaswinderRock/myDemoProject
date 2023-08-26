export enum ActionType {
    ADD_USER = "ADD_USER",
}

export const addNewUser = (payload: object) => ({
    type: ActionType.ADD_USER,
    payload: payload,
});
