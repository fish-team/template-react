import { GET_USERNAME } from '../actions/actionsTypes'

const inintailState = {
    username: ''
}

export function getUser(state = inintailState, action) {
    switch (action.type) {
        case GET_USERNAME:
            return {
                username: action.username
            }
        default:
            return state
    }
}