import authReducer from './Reducers/authReducer';
import productReducer from './Reducers/productReducer';
import sellerReducer from './Reducers/sellerReducer';
import categoryReducer from './Reducers/categoryReducer';

const rootReducer = {
    auth: authReducer,
    product: productReducer,
    seller: sellerReducer,
    category: categoryReducer
};

export default rootReducer;