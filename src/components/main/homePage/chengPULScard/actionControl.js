import axios from 'axios'
export const GET_getScheExclusiveList_DATA = 'main/chengPULScard '
export const loadListData = (res) => {
    return {
        type:GET_getScheExclusiveList_DATA,
        res
    }
}


// https://m.juooo.com/welfare/getScheExclusiveList
export const loadListDataAsync = (dispatch) => {
    return () => {
        axios({
            method: 'get',
            url: 'apis/welfare/getScheExclusiveList',
            params:{}
          }).then((res)=> {
            // console.log(res.data.data.list)
            // 获取轮播数据
           dispatch(loadListData(res.data.data.list))
          })
    }
}