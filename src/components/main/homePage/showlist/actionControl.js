import axios from 'axios'
export const GET_getFloorShow_DATA = 'main/homePage/showlist'
export const loadListData = (res) => {
  // console.log(res);
  
  return {
    type: GET_getFloorShow_DATA,
    res
  }
}
export const loadListDataAsync = (dispatch) => {
  return () => {
    axios({
      method: 'get',
      url: 'apis/home/getFloorShow',
      params: {
        city_abb: "",
        city_id: 0,
        version: "5.1.4",
        referer: 2
      }
    }).then((res) => {
      // 获取轮播数据
      // console.log(res);
      
      dispatch(loadListData(res.data.data))


    })
  }
}