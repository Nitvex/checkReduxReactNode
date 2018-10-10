import {FETCH_PRODUCTS} from "../constants/action-types";
import {FETCH_NUMBERS} from "../constants/action-types";
import {addProduct} from "../actions/addProduct";
import {addNumber} from "../actions/addNumber";

export const fetchMiddleware = ({dispatch}) => next => action => {
    let requestOptions = {
        method: 'GET',
        headers: new Headers(),
        mode: 'cors',
        cache: 'default'
    };
    ;

    if (action.type === FETCH_PRODUCTS) {
        fetch('http://127.0.0.1:3000/products', requestOptions).then((response) => {
            return response.json();
        }).then((products) => {
            products.forEach((product) => {
                dispatch(addProduct(product))
            });
        });
    }
    if (action.type === FETCH_NUMBERS) {
        fetch('http://127.0.0.1:3000/numbers', requestOptions).then((response) => {
            return response.json();
        }).then((numbers) => {
            numbers.forEach((number) => {
                dispatch(addNumber(number));
            });

        });
    }
    next(action);
};
