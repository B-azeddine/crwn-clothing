import { combineReducers } from "redux";

import userReduser from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer"

export default combineReducers({
	user: userReduser,
	cart:cartReducer
})