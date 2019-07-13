import {
    fromJS
} from 'immutable'
import {GET_getHotTheatre_DATA} from './actionControl'



const defaultStore = fromJS({
    //为你推荐数据
    theatre_list:[]
})

export default (state = defaultStore,action) => {
    switch (action.type) {
        default:
            break;
        case GET_getHotTheatre_DATA:
            // console.log(action.res);
            
            return state.update("theatre_list",(x)=> {
                // 获取为你推荐数据
                return x=fromJS(action.res)
            })
    }
    return state
}