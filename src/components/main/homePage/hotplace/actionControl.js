import axios from 'axios'
export const GET_getHotTheatre_DATA = 'main/homePage/hotplace '
export const loadListData = (res) => {
    return {
        type:GET_getHotTheatre_DATA,
        res
    }
}
export const loadListDataAsync = (dispatch) => {
    return () => {
        axios({
            method: 'get',
            url: 'apis/home/getHotTheatre',
            params: {
              limit: 6,
              version: "5.1.4",
              referer: 2
            }
          }).then((res)=> {
            // console.log(res)
            // 获取轮播数据
           dispatch(loadListData(res.data.data.theatre_list))
           
          })
    }
}