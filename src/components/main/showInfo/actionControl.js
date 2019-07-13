import axios from 'axios'
export const GET_LIST_DATA = 'layout/getClassifyItem'
export const loadListData = (res) => {
    return {
        type:GET_LIST_DATA,
        res
    }
}
export const loadListDataAsync = (dispatch) => {
    return () => {
        axios({
            method: 'get',
            url: 'apis/home/getClassifyItem',
            params: {
              city_id:'0',
              rows:'50',
              version:'5.1.4',
              referer:'2'
            }
          }).then((res)=> {
           dispatch(loadListData(res.data.data.bottom_slide_list))
          })
    }
}