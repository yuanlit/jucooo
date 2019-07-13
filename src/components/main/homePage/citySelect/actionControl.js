import axios from 'axios'
export const GET_LIST_DATA = 'main/homePage/citySelect'
export const loadListData = (res) => {
    return {
        type:GET_LIST_DATA,
        res
    }
}
export const loadListDataAsync = (dispatch) => {
    return () => {
        axios({
            method: 'post',
            url: 'apis/Index/getCityList',
            params: {
              // abbreviation:'', 
              // limit:'',
              // version: '5.1.4',
              // referer: 2
            }
          }).then((res)=> {
            // 获取城市地址
            dispatch(loadListData(res.data.city_list))
            // console.log(res.data.city_list)
          })
    }
}