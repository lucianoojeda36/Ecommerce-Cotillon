import {
  POST_IMAGE
  } from "./Products.action";
  
  var initialState = {
 products:[],
 image:''
  };
  
  const ProductReducer = (state = initialState, action:any) => {
    switch (action.type) {
      case POST_IMAGE:
        return {
          ...state,
          image: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default ProductReducer;