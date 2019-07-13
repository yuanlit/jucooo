import {
    fromJS
} from 'immutable'
import {GET_RetRecommendShow_DATA} from './actionControl'



const defaultStore = fromJS({
    //为你推荐数据
    recommend_show_list:[]
})

export default (state = defaultStore,action) => {
    switch (action.type) {
        default:
            break;
        case GET_RetRecommendShow_DATA:
            return state.update("recommend_show_list",(x)=> {
                // console.log(action.res)
                let a=x.toJS()
                // console.log(a)
                // console.log([...a,action.res])
                // let b=a.push(action.res)
                // console.log(b) 
                // 获取为你推荐数据
                return x=fromJS([...a,...action.res])
            })
    }
    return state
}