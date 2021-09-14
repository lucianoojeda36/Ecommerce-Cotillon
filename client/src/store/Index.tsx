import { combineReducers } from "redux";
import ProductReducer from "./products/Products.reducer";
import CategoryReducer from "./categories/Categories.reducer";

export default combineReducers({
  CategoryReducer,
  ProductReducer
});
