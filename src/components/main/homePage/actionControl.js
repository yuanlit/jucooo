import axios from 'axios'
export const GET_LIST_DATA = 'main/homePage'
// 以下，调取reducer里面的switch
export const loadListData = (res) => {
    return {
        type:GET_LIST_DATA,
        res
    }
}
// icon
export const loadIconList = (res) => {
  return {
      type:'GET_ICON_LIST',
      res
  }
}
// icon1
export const loadIconList1 = (res) => {
  return {
      type:'GET_ICON_LIST1',
      res
  }
}

export const loadListDataAsync = (dispatch,abb) => {
    return () => {
        axios({
            method: 'get',
            url: 'apis/home/getSildeList',
            params: {
              abbreviation:abb, 
              limit:'',
              version: '5.1.4',
              referer: 2
            }
          }).then((res)=> {
            // 获取轮播数据
           dispatch(loadListData(res.data.data))
          //  console.log(res.data.data.silde_list)
          })
    }
}
// 获取主页icon数据接口
export const loadListDataAsync01 = (dispatch,abb) => {
  return () => {
      axios({
          method: 'get',
          url: 'apis/home/getClassifyItem',
          params: {
            city_id:abb, 
            operation_limit: '5',
            version: '5.1.4',
            referer: 2
          }
        }).then((res)=> {
         // 获取第一部分icon的数据
         dispatch(loadIconList(res.data.data.classify_list))
         dispatch(loadIconList1(res.data.data.operation_list))
        })
  }
}
// 获取热门演出数据
export const loadListDataAsync02 = (abb) => {
  return(
    axios({
          method: 'get',
          url: 'apis/home/getHotsRecommendList',
          params: {
            city_id:abb, 
            rows: 50,
            version: '5.1.4',
            referer: 2
          }
        })
  )
}
// 获取巡回演出数据
export const loadListDataAsync03 = (abb) => {
  return(
    axios({
          method: 'get',
          url: 'apis/home/getTourRecommendList',
          params: {
            city_id:abb, 
            rows: 6,
            version: '5.1.4',
            referer: 2
          }
        })
  )
}