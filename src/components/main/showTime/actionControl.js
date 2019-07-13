import axios from 'axios'
import Swiper from 'swiper'
export const GET_GetShowCategory_DATA = 'main/showTime'

//演出种类数据
export const loadListData = (res) => {
    return {
        type: GET_GetShowCategory_DATA,
        res
    }
}

//演出数据
export const loadShowList = (res) => {
    return {
        type: 'GET_SHOW_LIST',
        res
    }
}
// https://m.juooo.com/Search/getShowCategory?&version=5.1.4&referer=2 演出种类接口
// https://m.juooo.com/Search/getShowList?category=35&city_id=1&page=1&keywords=&&version=5.1.4&referer=2
// https://m.juooo.com/Search/getShowList?category=36&city_id=1&page=1&keywords=&&version=5.1.4&referer=2
export const loadListDataAsync = (dispatch) => {
    return () => {
        axios({
            method: 'get',
            url: 'apis/Search/getShowCategory',
            params: {
                version: "5.1.4",
                referer: 2
            }
        }).then((res) => {
            dispatch(loadListData(res.data.data.show_category_list))
            new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                slidesPerView: 4,
                paginationClickable: true,
                spaceBetween: 30,
                freeMode: true
            });
        })
    }
}

export const loadListDataAsync03 = (dispatch) => {
    
    return () =>{
        axios({
            method: 'get',
            url: 'apis/Search/getShowList',
            params: {
                category: 35,
                city_id:1,
                version: '5.1.4',
                referer: 2
            }
        }).then((res) => {
            dispatch(loadShowList(res.data.data.list))
        })
    }
}