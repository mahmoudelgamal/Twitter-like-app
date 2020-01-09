import { SET_AUTHEd_USERS } from '../actions/authedUser'

export default function authedUser(state = null , action) {
    switch (action.type) {
        case SET_AUTHEd_USERS:
            return action.id
        default :
            return state

    }
}