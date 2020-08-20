export const alertReducer = (state, action) => {

    switch (action.type) {
        case 'SHOW_ALERT':
            return ({ ...state, ...action.payload, visible: true });
        case 'HIDE_ALERT':
            return state => ({ ...state, visible: false });
        default:
            return state;
    }
}