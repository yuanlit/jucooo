import axios from 'axios'
export const GET_RetRecommendShow_DATA = 'main/homePage/foryou'
export const loadListData = (res) => {
    return {
        type:GET_RetRecommendShow_DATA,
        res
    }
}
export const loadListDataAsync = (dispatch,num) => {
  // console.log(num);
  
    return () => {
        axios({
            method: 'get',
            url: 'apis/home/getRecommendShow',
            params: {
              cityAdd: "",
              page: num,
              version: "5.1.4",
              referer: 2
            }
          }).then((res)=> {
            // console.log(res.data.data.recommend_show_list)
            // 获取轮播数据
           dispatch(loadListData(res.data.data.recommend_show_list))
          
           
          })
    }
}