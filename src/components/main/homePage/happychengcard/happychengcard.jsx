/* eslint-disable no-unused-expressions */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import 'lib-flexible/flexible.js'
import axios from 'axios'
import HappyStyle from './happyStyle'
import { withRouter } from 'react-router-dom'
import { NavBar, Icon } from 'antd-mobile';

class tourist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 1,
      cardList: ''
    }
  }

  render() {

    return (
      <HappyStyle>
        <NavBar
          className='navbar'
          mode="light"
          icon={<Icon type="left" color='#232323' />}
          onLeftClick={() => this.props.history.goBack()}
          rightContent={[
            <Icon key="1" type="ellipsis" color='#232323' />,
          ]}
        >欢聚橙卡</NavBar>
        <div className="detailImgWrap" dangerouslySetInnerHTML={{ __html:this.state.cardList}}></div>
        <br/>
        <br/>
        <br/>
        <br/>
      </HappyStyle>
    )
  }
  getCardGroupLis(num) {
    let data = {
      page: num
    }
    axios({
      method: 'get',
      url: 'apis/Cardproduct/ajaxGetCardGroupList',
      params: data
    }).then(res => {
      console.log(res.data.data.showData);
      let cardList=res.data.data.showData
      // console.log(this.state.showList);

    //   let showList = [...this.state.cardList, ...res.data.data]
      this.setState({ cardList})
      console.log(this.state);
      


    })

  }
  componentDidUpdate() {

  }
  componentDidMount() {
    this.getCardGroupLis(1)
    // this.props.getFloorShow()

  }
}
const mapStateToProps = (store) => {


  return {
    // show_list: store.getIn(['showListReducer', 'show_list'])
  }
}


const mapDispathToProps = (dispatch) => {
  return {

    // getFloorShow() {
    //   dispatch(loadListDataAsync(dispatch))

    // }
  }
}
export default connect(mapStateToProps, mapDispathToProps)(withRouter(tourist))