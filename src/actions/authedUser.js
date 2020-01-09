export const SET_AUTHEd_USERS = 'SET_AUTHEd_USERS';

export function setAuthedUser(id) {
    return {
        type: SET_AUTHEd_USERS,
        id
    }
}