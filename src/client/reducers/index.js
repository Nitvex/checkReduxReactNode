import {ADD_PRODUCT, ADD_NUMBER, AUTHENTICATE, LOGOUT} from "../constants/action-types";

const initialState = {
    products: [],
    numbers: [],
    isAuthenticated: false,
};
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {...state, products: [...state.products, action.payload]};
        case ADD_NUMBER:
            return {...state, numbers: [...state.numbers, action.payload]};
        case AUTHENTICATE:
            return {...state, isAuthenticated: true};
        case LOGOUT:
            return {...state, isAuthenticated: false};
        default:
            return state;
    }
};
export default rootReducer;