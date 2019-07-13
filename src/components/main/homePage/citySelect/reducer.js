import {
    fromJS
} from 'immutable'

import {GET_LIST_DATA} from './actionControl'

const defaultStore = fromJS({
    // 所有城市
    cityList:[]
})

export default (state = defaultStore, action) => {
    switch (action.type) {
        default:
            break;
        case GET_LIST_DATA:
            return state.update("cityList",(x)=> {
                var testArr=[];
                for(var n in action.res){
                    testArr.push(action.res[n])
                }
                // 获取轮播数据
                return x=fromJS(testArr)
            })
    }
    return state
}