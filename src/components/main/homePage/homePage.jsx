import React, { Component } from 'react';
import {
    fromJS
} from 'immutable'

import { connect } from 'react-redux';
// 异步调取接口_轮播,_icon
import { loadListDataAsync, loadListDataAsync01, loadListDataAsync02, loadListDataAsync03 } from "./actionControl";

// 组件引入区
// 主页轮播
import SwitchBanner from '@/components/temCommon/swiper/swiperBan/swiperBan';
// 热门演出
import HotSwiper from './Hot_swiper/hotSwiper'
// 巡回演出
import TourSwiper from './Tour_swiper/TourSwiper'
// 合集
import ShowList from '@/components/main/homePage/showlist/showlist'
// 热门场馆
import HotPlace from '@/components/main/homePage/hotplace/hotplace'
// 为你推荐
import ForYou from '@/components/main/homePage/foryou/foryou'
import { ActivityIndicator, WingBlank, WhiteSpace, Button } from 'antd-mobile';
import { NavStyle, SectionStyle } from './homePageStyle'
class homePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            HotSwiperData: [],
            TourData: [],
            style: '',
            url: 'https://m.juooo.com/static/img/nav_icon_search.f194288.png',
            list:[35,79,37,38,36],
            animating:true

        }
    }
    render() {
        return (
            <div>
                {/* 顶部搜索导航 */}
                <NavStyle>
                    <div className={this.state.style}>
                        <div className="site" onClick={this.props.citySelect.bind(this)}>
                            <i className="fa fa-map-marker"></i>
                            <span>{this.props.city.get("name")}</span>
                        </div>
                        <div className="search" onClick={this.props.goSearch.bind(this)}>
                            <img src={this.state.url} alt="聚橙网" />
                            <span className="hot">搜索热门演出</span>
                        </div>
                        <div className="share">
                            <img src="http://image.juooo.com/group1/M00/02/65/rAoKmVyvD7iAHJX4AAADmpmoUeI150.png" alt="" />
                        </div>
                    </div>
                </NavStyle>
                {/* 轮播 */}
                <SwitchBanner bannerList={this.props.bannerList} />

                {/*  第一部分icon+罗密欧大图 */}
                <SectionStyle>
                <ActivityIndicator animating={this.state.animating}/>
                    <div className='icon1_box'>
                        {
                            this.props.Icon_list.map((item, index) => {
                                return (
                                    <a key={index} href="JavaScript:void(0)" onClick={this.goto.bind(this, this.state.list[index])}>
                                        <img src={item.get("pic")} alt="xx" />
                                        <span>{item.get("name")}</span>
                                    </a>
                                )
                            })
                        }
                    </div>
                    <img className="luomiou" src="http://image.juooo.com/group1/M00/02/64/rAoKmVyurWWASnGFAAMNnYeNyoc800.png" alt=""></img>
                    {/* 第二部分icon */}
                    <div className="icon2_box">
                        <ul className="icon2">
                            {
                                this.props.Icon_list1.map((item, index) => {
                                    
                                    return (
                                        <li key={index} onClick={this.props.clickIcon.bind(this,index)}>
                                            <h3>{item.get("name")}</h3>
                                            <div dangerouslySetInnerHTML={{ __html: item.get("describe") }}></div>
                                            <img src={item.get("pic")} alt="" />
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </SectionStyle>
                <HotSwiper HotSwiperData={this.state.HotSwiperData} title={'热门演出'} />
                <TourSwiper TourData={this.state.TourData} title={'巡回演出'} />
                <ShowList></ShowList>
                <HotPlace></HotPlace>
                <ForYou></ForYou>
            </div>
        )
    }
    goto(abc) {
        
        this.props.history.push(`/showTime/${abc}`)

    }
    componentWillMount() {
        let cityInit = this.props.location.state;
        this.props.getData(this)
        this.props.setCity(cityInit);
        // 获取热门场馆数据
        loadListDataAsync02().then(res => {
            let HotSwiperData = res.data.data.hots_show_list.splice(0, 10);
            this.setState({ HotSwiperData })
        this.setState({animating:false});

        })
        this.props.getTourData(res => {
            res.then(data => {
                let TourData = data.data.data.tour_show_list
                this.setState({ TourData })
            })
        })
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    handleScroll = (event) => {
        //滚动条高度
        let ctx = this;
        let scrollTop = document.documentElement.scrollTop;  //滚动条滚动高度
        if (scrollTop === 0) {
            ctx.setState({ style: 'title' })
            ctx.setState({ url: 'https://m.juooo.com/static/img/nav_icon_search.f194288.png' })
        } else {
            ctx.setState({ url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAXVBMVEUAAACzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MU5mdkAAAAHnRSTlMA+fES5d1bGgytwpCJIDy9p6Z+eWMpCKRv1sjGlU+Yw8sxAAAA/0lEQVQ4y+2TWXKDMBBENVrAYjHGGPD67n/MVEhiKiORcv7dX6Lr0UMLybz1D+2KQxAI8eT+wqbB8iPb7Da58QLgq9iFZbHf4Pb2M2dc1u3RgjzyeRa68vnoIkguc7rA/MtpwGcqDdApq4d7ui8WW2rPI9ozBTRG6wyD9g4wJqATKu0FvEl1Q7S1vqvm6N4QM2ANbQJ2GXAGXTsQMmCVfmOENt1c4aq9ExzNK6azWF1wCrkxDcS0c5+5BB4a/QNtmTu3Av1unVsDtcnpIeDP7iv/FAAo8nfBA3I71HMlgK03SXcXnupLU2ySphyWMLke2+9TKmZTrl27FhLNWy/oA9CZFFU7WU6aAAAAAElFTkSuQmCC' })
            ctx.setState({ style: 'title01' })
        }
    }
}
// 定义属性
const mapStateToProps = (store) => {
    // 获取轮播数据
    return {
        bannerList: store.getIn(['homePageReducer', 'bannerList']),
        city: store.getIn(['homePageReducer', 'city']) || fromJS({ id: "0", name: "全国", enname: "quanguo", Abbreviation: "QG", is_city: "0" }),
        Icon_list: store.getIn(['homePageReducer', 'Icon_list']),
        Icon_list1: store.getIn(['homePageReducer', 'Icon_list1'])
    }
}
// 定义方法
const mapDispathToProps = (dispatch) => {
    return {
        // 去搜索
        goSearch() {
            this.props.history.push("/homePage/search")
        },
        citySelect() {
            this.props.history.push("/homePage/citySelect")
        },
        getData(homePage) {
            // 第一次调用可以执行一个函数
            // 我们的条件是dispatch 可以执行函数
            // 函数如果不传参,可以不写后面的括号
            setTimeout(() => {
                dispatch(loadListDataAsync(dispatch, homePage.props.city.get("Abbreviation")))
                dispatch(loadListDataAsync01(dispatch, homePage.props.city.get("id")))
            }, 200)
        },
        // 设置城市地址
        setCity(res) {
            let action = {
                type: 'SET_CITY',
                res
            }
            dispatch(action)
        },
        // 调取巡回演出接口
        getTourData(cb) {
            cb(loadListDataAsync03())

        },
        // 第二部分五个icon点击事件
        clickIcon(index) {
            console.log(index);
            switch (index) { 
                case 0:
                    this.props.history.push('/homePage/chengPULScard')
                    break;
                case 1:
                    this.props.history.push('/homePage/grade')
                    break;
                case 3:
                    this.props.history.push('/calendar')
                    break;
                case 4:
                    this.props.history.push('/Cardproduct/index')
                    break;
                default:
                    break;
            }
        }
    }
}
export default connect(mapStateToProps, mapDispathToProps)(homePage);