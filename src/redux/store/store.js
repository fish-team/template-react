import { createStore } from "redux"
import { getUser } from "../reducers/reducers"

let store = createStore(getUser);

export default store