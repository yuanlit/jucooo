/* eslint-disable no-unused-expressions */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import 'lib-flexible/flexible.js'
import axios from 'axios'
// import { loadListDataAsync } from './actionControl'
import CalendarStyle from './calendarStyle'
import { withRouter } from 'react-router-dom'
import { NavBar, Icon } from 'antd-mobile';
import { PullToRefresh, Button } from 'antd-mobile';
// import { loadListDataAsync } from './actionControl'
import { List, Switch, Calendar } from 'antd-mobile';
import enUS from 'antd-mobile/lib/calendar/locale/en_US';
import zhCN from 'antd-mobile/lib/calendar/locale/zh_CN';
import { Tabs, WhiteSpace } from 'antd-mobile';
import { get } from 'http';

const extra = {
    '2017/07/15': { info: 'Disable', disable: true },
};

const now = new Date();


Object.keys(extra).forEach((key) => {
    const info = extra[key];
    const date = new Date(key);
    if (!Number.isNaN(+date) && !extra[+date]) {
        extra[+date] = info;
    }
});
class calendar extends Component {
    originbodyScrollY = document.getElementsByTagName('body')[0].style.overflowY;

    constructor(props) {
        super(props);
        this.state = {
            en: false,
            show: false,
            config: {},
            tab: [],
            list: [],
            category:''
        };
    }
    render() {
        const tabs = []
        // console.log(this.state);

        this.state.tab.forEach((item) => {
            tabs.push({ title: item.name })
        })
        // console.log(tabs);


        return (
            <CalendarStyle>
                <div className="title">
                    <NavBar
                        display="fixed"
                        mode="light"
                        icon={<Icon type="left" />}
                        onLeftClick={() => this.props.history.goBack()}
                        className="navbar"
                    >演出日历
                    </NavBar>
                </div>
                <div>
                    <WhiteSpace />
                    <Tabs tabs={tabs} onTabClick={(tab, index) => { this.totab(tab, index) }} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={4} />}></Tabs>
                    {/* <WhiteSpace /> */}
                </div>
                <div>
                    <List className="calendar-list" style={{ backgroundColor: 'white' }}>
                        {this.renderBtn('选择日期', 'Select Date', { type: 'one' })}
                    </List>
                    <Calendar
                        {...this.state.config}
                        visible={this.state.show}
                        onCancel={this.onCancel}
                        onConfirm={this.onConfirm}
                        onSelectHasDisableDate={this.onSelectHasDisableDate}
                        getDateExtra={this.getDateExtra}
                        defaultDate={now}
                        minDate={new Date(+now - 5184000000)}
                        maxDate={new Date(+now + 31536000000)}
                    />
                </div>
                <div className="info">
                    <ul>
                        <PullToRefresh
                            direction={'up'}
                            distanceToRefresh={60}
                            refreshing={this.state.refreshing}
                            onRefresh={() => {
                                // console.log(this.state.num++);

                                // this.props.getRecommendShow(this.state.num++)
                                setTimeout(() => {
                                    this.setState({ 'refreshing': false })
                                    return
                                }, 1000);
                            }}>
                            {
                                this.state.list.map((item, index) => {
                                    // console.log(this.props.recommend_show_list)
                                    // console.log(item.get('url') )
                                    // console.log(item);

                                    return (
                                        <li key={index} >
                                            <div className="show-icon">
                                                <a href={item.url}>
                                                    <img src={item.pic} />
                                                    <div className="logo_i">
                                                        {/* <img src={juban} alt="" /> */}
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="item-desc">
                                                <div className="show-date">
                                                    <strong>{item.show_time_top}</strong>
                                                    {item.week}
                                                </div>
                                                <a href={item.url}>
                                                    <h3>{item.name}</h3>
                                                </a>
                                                <p className="venue">{item.city_name} | {item.venue_name}</p>
                                                <p className="price"><strong>¥{item.min_price}</strong>起 </p>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </PullToRefresh>
                    </ul>
                </div>
                <br />
                <br />
                <br />
                <br />

            </CalendarStyle >
        )
    }
    renderBtn(zh, en, config = {}) {
        config.locale = this.state.en ? enUS : zhCN;
        return (
            <List.Item arrow="horizontal"
                onClick={() => {
                    // console.log(1111);
                    document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
                    this.setState({
                        show: true,
                        config,
                    });
                }} >
                {this.state.en ? en : zh}
            </List.Item>
        );
    }
    changeLanguage = () => {
        this.setState({
            en: !this.state.en,
        });
    }
    onSelectHasDisableDate = (dates) => {
        console.warn('onSelectHasDisableDate', dates);
    }
    onConfirm = (startTime, endTime) => {

        let date = startTime.getFullYear() + '/' + (startTime.getMonth() + 1) + '/' + startTime.getDate()
        let vm=this
        let data = {
            method: 'get', url: 'apis/Search/getShowList', params: {
                category: this.state.category||0,
                city_id: 0,
                start_time: date,
                version: '5.1.4',
                referer: 2
            }
        }
        this.getData(data, (res) => {
            // console.log(res);
            vm.setState({ list: res.data.data.list })
            
        })


        // console.log(this);
        document.getElementsByTagName('body')[0].style.overflowY = this.originbodyScrollY;
        this.setState({
            show: false,
            startTime,
            endTime,
        });
    }
    onCancel = () => {
        document.getElementsByTagName('body')[0].style.overflowY = this.originbodyScrollY;
        this.setState({
            show: false,
            startTime: undefined,
            endTime: undefined,
        });
    }
    getDateExtra = date => extra[+date];
    totab(tab, index) {
        let vm = this
        this.setState({category:this.state.tab[index].category_id})
        this.getData({
            method: 'get', url: 'apis/Search/getShowList', params: {
                category: this.state.tab[index].category_id,
                city_id: 0,
                start_time: '2019/7/5',
                version: '5.1.4',
                referer: 2
            }
        }, function (res) {
            // console.log(res.data.data.list);
            // console.log(vm);
            vm.setState({ list: res.data.data.list })
            // console.log(this.state.list);
        })
    }
    getData(data, cb) {
        axios(data).then(res => {
            cb(res)
        })
    }
    componentDidMount() {
        //获取滑动部分
        let vm = this
        this.getData({ method: 'get', url: 'apis/Search/getShowCategory', params: { version: '5.1.4', referer: 2 } }, function (res) {
            // console.log(res.data.data.show_category_list);
            // console.log(vm);
            vm.setState({ tab: res.data.data.show_category_list })
        })
        //获取详情
        this.getData({
            method: 'get', url: 'apis/Search/getShowList', params: {
                category: 0,
                city_id: 0,
                start_time: new Date().getFullYear() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getDate(),
                version: '5.1.4',
                referer: 2
            }
        }, function (res) {
            // console.log(res.data.data.list);
            vm.setState({ list: res.data.data.list })
            // console.log(vm.state.list);
        })
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
export default connect(mapStateToProps, mapDispathToProps)(withRouter(calendar))