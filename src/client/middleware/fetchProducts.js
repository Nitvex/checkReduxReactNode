import {FETCH_PRODUCTS} from "../constants/action-types";
import {addProduct} from "../actions/addProduct";

export const fetchProductsMiddleware = ({dispatch}) => next => action => {
    if (action.type === FETCH_PRODUCTS) {
        let requestOptions = {
            method: 'GET',
            headers: new Headers(),
            mode: 'cors',
            cache: 'default'
        };
        fetch('http://127.0.0.1:3000/products', requestOptions).then((response) => {
            return response.json();
        }).then((products) => {
            products.forEach((product) => {
                dispatch(addProduct(product))
            });
        });
    }
    next(action);
};
