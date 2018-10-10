import {createStore,applyMiddleware} from "redux";
import rootReducer from "../reducers/index";
import {fetchProductsMiddleware} from "../middleware/fetchProducts";


const store = createStore(rootReducer, applyMiddleware(fetchProductsMiddleware));
export default store;