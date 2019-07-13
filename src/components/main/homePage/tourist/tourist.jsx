/* eslint-disable no-unused-expressions */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import 'lib-flexible/flexible.js'
import axios from 'axios'
// import { loadListDataAsync } from './actionControl'
import TouristStyle from './touristStyle'
import { withRouter } from 'react-router-dom'
import { NavBar, Icon,Popover } from 'antd-mobile';
import { PullToRefresh } from 'antd-mobile';
const Item = Popover.Item;
const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;



// import { loadListDataAsync } from './actionControl'

class tourist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 1,
      showList: [],
      
    }
  }

  render() {

    return (
      <TouristStyle>
        <NavBar
         mode="light"
         icon={<Icon type="left" color='#232323' />}
         onLeftClick={() => this.props.history.goBack()}
         rightContent={
           <Popover mask
             overlayClassName="fortest"
             overlayStyle={{ color: 'currentColor' }}
             visible={this.state.visible}
             overlay={[
               (<Item key="4" value="scan" icon={myImg('tOtXhkIWzwotgGSeptou')}   data-seed="logId">首页</Item>),
               (<Item key="5" value="special" icon={myImg('PKAgAqZWJVNwKsAJSmXd')}  style={{ whiteSpace: 'nowrap' }}>我的聚橙</Item>),
             ]}
             align={{
               overflow: { adjustY: 0, adjustX: 0 },
               offset: [-10, 0],
             }}
             onVisibleChange={this.handleVisibleChange}
             onSelect={
              (key)=>{
                // console.log(key.key);
                
                switch (key.key) {
                  case "4":
                      this.props.history.push('/homePage')
                      break;
                  case "5":
                      this.props.history.push('/mine')
                      break;
                  default:
                      break;
              }
              }
            
            }
           >
             <div style={{
               height: '100%',
               padding: '0 15px',
               marginRight: '-15px',
               display: 'flex',
               alignItems: 'center',
             }}
             >
               <Icon type="ellipsis" />
             </div>
           </Popover>
         }
       >
          巡回演出</NavBar>
        <PullToRefresh
          direction={'up'}
          distanceToRefresh={60}
          refreshing={this.state.refreshing}
          onRefresh={() => {
            // console.log(this.state.num++);
            this.getShowList(++this.state.num)
            setTimeout(() => {
              this.setState({ 'refreshing': false })
              return
            }, 1000);
          }}>
          {
            this.state.showList.map((item, index) => {
              return (
                <div className="content" key={index}>
                  <div className="show-wrap">
                    <div className="show-item">
                      <a className="show-left">
                        <img src={item.pic} alt=" " />
                      </a>
                      <div className="show-right">
                        <a href="" className="show-tt">{item.show_name}</a>
                        <p>{item.display_show_time}</p>
                        {
                          item.cityItems.map((item, index) => {
                            if (index < 5) {
                              return (
                                <div className="city-wrap" key={index}>
                                  <a href={item.schedular_url}>{item.city_name}</a>
                                </div>
                              )
                            } else if (index == 5) {
                              return (
                                <div className="city-wrap" key={index}>
                                  <a href="">查看更多</a>
                                </div>
                              )
                            } else {
                              return
                            }
                          })
                        }
                      </div>
                    </div>
                  </div>
                </div>

              )
            })
          }
        </PullToRefresh>
      </TouristStyle>
    )
  }
  getShowList(num) {
    let data = {
      page: num
    }
    axios({
      method: 'get',
      url: 'apis/tour/ShowList',
      params: data
    }).then(res => {
      // console.log(res.data.data);

      let showList = [...this.state.showList, ...res.data.data]
      this.setState({ showList })


    })

  }
  componentDidUpdate() {

  }
  componentDidMount() {
    this.getShowList(1)

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