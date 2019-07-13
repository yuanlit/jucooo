import {
    fromJS
} from 'immutable'
import {GET_getScheExclusiveList_DATA} from './actionControl'



const defaultStore = fromJS({
    //为你推荐数据
    getScheExclusiveList_list:[]
})

export default (state = defaultStore,action) => {
    switch (action.type) {
        default:
            break;
        case GET_getScheExclusiveList_DATA:
            // console.log(action.res);
            
            return state.update("getScheExclusiveList_list",(x)=> {
                // 获取为你推荐数据
                return x=fromJS(action.res)
            })
    }
    return state
}