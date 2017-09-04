import { SHOW_TEXT } from '../actions/actionTypes'

const inintailState = {
    text: 'this is reducer'
}

export function showText(state = inintailState, action) {
    switch (action.type) {
        case SHOW_TEXT:
            return 1111
        default:
            return state
    }
}