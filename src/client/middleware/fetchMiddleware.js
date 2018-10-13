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

    let actionMethod = {
        url: '',
        action: null,
    };

    switch (action.type) {
        case FETCH_PRODUCTS:
            actionMethod.url = 'products';
            actionMethod.action = addProduct;
            break;
        case FETCH_NUMBERS:
            actionMethod.url = 'numbers';
            actionMethod.action = addNumber;
            break;
        default:
            next(action);
            return;
    }

    fetch(`http://127.0.0.1:3000/${actionMethod.url}`, requestOptions).then((response) => {
        return response.json();
    }).then((items) => {
        items.forEach((item) => {
            dispatch(actionMethod.action(item))
        });
    });
    next(action);
};
