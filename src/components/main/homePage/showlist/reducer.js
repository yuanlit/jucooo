import {
    fromJS
} from 'immutable'
import {GET_getFloorShow_DATA} from './actionControl'



const defaultStore = fromJS({
    //为你推荐数据
    show_list:[]
})

export default (state = defaultStore,action) => {
    switch (action.type) {
        default:
            break;
        case GET_getFloorShow_DATA:
            return state.update("show_list",(x)=> {
                // 获取为你推荐数据
                return x=fromJS(action.res)
            })
    }
    // console.log(state);
    
    return state
}