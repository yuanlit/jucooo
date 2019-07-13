import {
    fromJS
} from 'immutable'

import {GET_LIST_DATA} from './actionControl'

const defaultStore = fromJS({
    getClassifyItem:[]
})

export default (state = defaultStore, action) => {
    switch (action.type) {
        default:
            // console.log(action.type)
            break;
        case GET_LIST_DATA:
            return state.update("getClassifyItem",(x)=> {
                return x.concat(fromJS(action.res))
            })
    }
    return state
}