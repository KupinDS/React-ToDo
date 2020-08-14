import { SHOW_ALERT, HIDE_ALERT } from "../actionTypes"

const handlers = {
    [SHOW_ALERT]: (state, { payload }) => ({ ...payload, visible: true }),
    [HIDE_ALERT]: state => ({ ...state, visible: false }),
    DEFAULT: state => state
}

export const alertReducer = (state, action) => {

    // switch (action.type) {
    //     case 'SHOW_ALERT':
    //         return (state, { payload }) => ({ ...payload, visible: true });
    //     case 'HIDE_ALERT':
    //         return state => ({ ...state, visible: false });
    //     default:
    //         return state;
    // }
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}
