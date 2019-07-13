import {
    fromJS
} from 'immutable'

import {
    GET_LIST_DATA
} from './actionControl'

const defaultStore = fromJS({
    bannerList: [],
    city: '',
    // 所有城市
    cityList: [],
    // 第一部分ICON数据
    Icon_list: [],
    // 第二部分ICON数据
    Icon_list1: []
})

export default (state = defaultStore, action) => {
    switch (action.type) {
        default:
            // console.log(action.type)
            break;
        case GET_LIST_DATA:
            return state.update("bannerList", (x) => {
                // 获取轮播数据
                return x = fromJS(action.res.silde_list)
            });
        case "GET_ICON_LIST":
            return state.update("Icon_list", (x) => {
                // 获取第一部分icon的数据
                return x = fromJS(action.res)
            });
        case "GET_ICON_LIST1":
            return state.update("Icon_list1", (x) => {
                // 获取第二部分icon的数据
                return x = fromJS(action.res)
            });
        case 'SET_CITY':
            // 存入城市数据
            return state.update("city", (x) => {
                return x = action.res
            })
    }
    return state
}