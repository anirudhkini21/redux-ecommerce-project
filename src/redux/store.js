import {configureStore} from '@reduxjs/toolkit'
import productSaga from './productSaga'
import rootReducer  from './rootReducer';
import createSagaMiddleware from 'redux-saga'


const sagaMiddleWare = createSagaMiddleware();
const store = configureStore(
    {
    reducer:rootReducer,
    middleware: () => [sagaMiddleWare]
    }
);

sagaMiddleWare.run(productSaga);
export default store