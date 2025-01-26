import {ADD_TO_CART, EMPTY_CART, REMOVE_TO_CART} from  './constant'

export const cartData = (data = [], action) => {
    switch(action.type){
        case ADD_TO_CART:
            console.log("ADD condition", action);
            return [action.data, ...data]
        case REMOVE_TO_CART:
            console.log('REMOVE condition', action)
            const remainingItem = data.filter((item)=>item.id!==action.data)
            return remainingItem;
        case EMPTY_CART:
            console.log('EMPTY cart')
            return [];
        default:
            return data
    }
};
