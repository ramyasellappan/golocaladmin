import { templateConstants } from '../actions/constants';


const initState = {
    categories: [],
    loading: false,
    error: null
};

export default (state = initState, action) => {

    switch (action.type) {
        case templateConstants.GET_ALL_PRODUCTS_SUCCESS:
            state = {
                ...state,
                categories: action.payload.categories
            }
            break;
        }
        return state;
        
    }