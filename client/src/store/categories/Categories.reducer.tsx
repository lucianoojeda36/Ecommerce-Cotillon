import {
    POST_CATEGORY
    } from "./Categories.action";
    
    var initialState = {
   categories:[]
    };
    
    const CategoryReducer = (state = initialState, action:any) => {
      switch (action.type) {
        case POST_CATEGORY:
          return {
            ...state,
            categories: action.payload,
          };
        default:
          return state;
      }
    };
    
    export default CategoryReducer;