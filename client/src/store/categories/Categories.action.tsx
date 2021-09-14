import axios from 'axios';
export const POST_CATEGORY = "POST_CATEGORY";


export const CreateCategory = () => {
    return (dispatch: any) => {
        axios.get(`/orders/cart`).then((res) => {
            dispatch({ type: POST_CATEGORY, payload: res.data })
        });
    };
};