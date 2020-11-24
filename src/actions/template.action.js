import axios from "../helpers/axios";
import { templateConstants } from "./constants";

export const getProduct = () => {

    return async dispatch => {

        console.log("I am working2 in dispatch");

        /*dispatch({ type: templateConstants.GET_ALL_PRODUCTS_REQUEST });
         */
        const res = await axios.get('/getProduct');
        console.log(res);

      if (res.status === 200) {
 
             const { products } = res.data;
 
             dispatch({
                 type: templateConstants.GET_ALL_PRODUCTS_SUCCESS,
                 payload: { categories : products} 
             });
         } else {
             dispatch({
                 type: templateConstants.GET_ALL_PRODUCTS_FAILURE,
                 payload: { error: res.data.error }
             }); 
    }
}
}

