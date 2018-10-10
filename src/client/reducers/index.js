import { ADD_PRODUCT } from "../constants/action-types";
import { ADD_NUMBER } from "../constants/action-types";
const initialState = {
    products: [],
    numbers:[]
};
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return { ...state, products: [...state.products, action.payload] };
        case ADD_NUMBER:
            return { ...state, numbers: [...state.numbers, action.payload] };
        default:
            return state;
    }
};
export default rootReducer;