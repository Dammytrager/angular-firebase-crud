import {AppState} from './interface';
import {CHANGE_ACTIVE_USER, CHANGE_LOADING, CHANGE_ROUTE, CHANGE_USERS, REPLACE_USERS} from './actions';

export const INITIAL_STATE: AppState = {
    route: '',
    users: [],
    activeUser: {},
    loading: true
};

export function rootReducer(state, action) {
    switch (action.type) {
        case CHANGE_ROUTE:
            return Object.assign({}, state, {
                route: action.route
            });
        case CHANGE_USERS:
            return Object.assign({}, state, {
                users: [...state.users, ...action.users]
            });
        case REPLACE_USERS:
            return Object.assign({}, state, {
                users: [...action.users]
            });
        case CHANGE_LOADING:
            return Object.assign({}, state, {
                loading: action.loading
            });
        case CHANGE_ACTIVE_USER:
            return Object.assign({}, state, {
               activeUser: action.activeUser
            });
    }
    return state;
}
