import {ADD_TO_CART, REMOVE_TO_CART, EMPTY_CART} from './constant'

export const addToCart = (data) =>{

    console.log('action: addToCart called', data)
    return {
        type: ADD_TO_CART,
        data
    }
}

export const removeToCart = (data) =>{

    console.log('action removeToCart called', data)
    return {
        type: REMOVE_TO_CART,
        data
    }
}

export const emptyCart = () =>{

    console.log('action emptyCart called')
    return {
        type: EMPTY_CART
    }
}