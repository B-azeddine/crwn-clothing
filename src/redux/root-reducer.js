import { combineReducers } from "redux";

import userReduser from "./user/user.reducer";


export default combineReducers({
	user: userReduser,
})