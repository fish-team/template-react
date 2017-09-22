import { createStore } from "redux"
import { showText } from "../reducers/reducers"

let store = createStore(showText);

export default store