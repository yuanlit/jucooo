import {createStore, applyMiddleware} from "redux"
import store from "./reducer"
import thunk from "redux-thunk"
export default createStore(store,applyMiddleware(thunk))

// applyMiddleware是一个中间件
// redux-thunk 她可以让dispatch进行异步传输,且可以使用dispatch传入函数