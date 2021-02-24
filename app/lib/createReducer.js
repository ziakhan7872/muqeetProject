import storage from 'redux-persist/es/storage';

/*
 * Will dynamically create reducers
 * enforcing a unique way to describe reducers
 */
export default function createReducer(initialState, handlers) {
    return function reducer(state = initialState, action) {
        switch (action.type) {
        case 'LOGOUT_RESPONSE':
            storage.removeItem('persist:root');
            return initialState;
        }
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action);
        } else {
            return state;
        }
    };
}
