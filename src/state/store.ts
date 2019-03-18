import {AppState} from './interface';
import {CHANGE_ROUTE} from './actions';

export const INITIAL_STATE: AppState = {
    route: '',
    users: [],
    activeUser: {}
};

export function rootReducer (state, action) {
    switch (action.type) {
        case CHANGE_ROUTE:
            return Object.assign({}, state, {
                route: action.route
            });
    }
    return state;
}
