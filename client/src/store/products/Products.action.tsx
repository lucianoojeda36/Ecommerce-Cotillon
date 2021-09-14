export const POST_IMAGE = "POST_ORDER_BY_ID";


export const SaveImage = (urlimage:any) => {
    return (dispatch: any) => {    
    dispatch({ type: POST_IMAGE, payload: urlimage })
    };
};