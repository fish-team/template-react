import { createStore } from "redux"
import { showText } from "../reducers"

let store = createStore(showText);
console.log(store);