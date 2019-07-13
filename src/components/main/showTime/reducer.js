import {
    fromJS
} from 'immutable'
import { GET_GetShowCategory_DATA } from './actionControl'



const defaultStore = fromJS({
    //演出种类数据
    show_category_list: [],
    //演出数据
    show_list: []
})

export default (state = defaultStore, action) => {
    switch (action.type) {
        default:
            break;
        case GET_GetShowCategory_DATA:
            return state.update("show_category_list", (x) => {
                //演出种类数据
                return x = fromJS(action.res)
            })
        case 'GET_SHOW_LIST':
            console.log("ok")
            return state.update("show_list", (x) => {
                //演出种类数据
                return x = fromJS(action.res)
            })
    }
    return state
}