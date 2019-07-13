import {combineReducers} from "redux-immutable"
import layOutReducer from "@/components/layout/reducer"
import homePageReducer from '@/components/main/homePage/reducer'
import citySelectReducer from '@/components/main/homePage/citySelect/reducer'
// import newsReducer from "@/components/main/News/reducer"
import forYouReducer from '@/components/main/homePage/foryou/reducer'
import hotPlaceReducer from '@/components/main/homePage/hotplace/reducer'
import showcategoryReducer from '@/components/main/showTime/reducer' //演出种类
import showListReducer from '@/components/main/homePage/showlist/reducer'
import PlusCouponReducer from '@/components/main/homePage/chengPULScard/reducer'
export default combineReducers({
    layOutReducer,
    homePageReducer,
    citySelectReducer,
    forYouReducer,
    hotPlaceReducer,
    showcategoryReducer,
    showListReducer,
    PlusCouponReducer

})
// import {combineReducers} from "redux" 他只能返回一个js数据类型
// redux给我们提供了 redux-immutable