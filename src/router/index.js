import React,{Fragment,Component} from "react";
import { Route ,Redirect,Switch} from "react-router-dom";
// 首页
import homePage from "@/components/main/homePage/homePage"
// 首页城市选择
import citySlect from "@/components/main/homePage/citySelect/citySelect"
// 引入剧院模块
import theater from "@/components/main/theater/theater"
// 引入票夹模块
import ticketFolder from "@/components/main/ticketFolder/ticketFolder"
// 引入我的
import mine from "@/components/main/mine/mine"
//引入详情页
// import showInfo from "@/components/main/showInfo/showInfo"
import showInfo from "@/components/main/showInfo/showInfo"
//引入演出页
import showTime from "@/components/main/showTime/showTime"
//引入巡回演出页
import tourist from "@/components/main/homePage/tourist/tourist"
// 引入登录模块
import login from '@/components/main/mine/login/login'
//引入橙PULS卡
import chengPULScard from "@/components/main/homePage/chengPULScard/chengPULScard"



// 引入积分商城
import grade from "../components/main/homePage/grade/grade";
//引入橙卡模块
import search from "../components/main/homePage/search/search";
//引入日历模块
import calendar from "../components/main/homePage/calendar/calendar";

// 引入搜索模块
import Cardproduct from "../components/main/homePage/happychengcard/happychengcard";

export default class extends Component{
    render(){
        return (
            <Fragment>
                    <Switch>
                    <Route path="/Cardproduct/index" exact component={Cardproduct}/>
                        <Route path="/showInfo" exact component={showInfo}/>
                        <Route path="/homePage" exact component={homePage} />
                        <Route path="/calendar" exact component={calendar} />
                        <Route path="/tourist" exact component={tourist} />
                        <Route path="/homePage/citySelect" exact component={citySlect} />
                        <Route path="/theater"  component={theater} />
                        <Route path="/ticketFolder"  component={ticketFolder} />
                        {/* <Route path="/mine"  component={mine} /> */}
                        <Route path="/showInfo" />
                        <Route path="/homePage/grade"  component={grade} />
                        <Route path="/homePage/search"  component={search} />
                        <Route path="/showTime/:aaa" exact component={showTime} />
                        <Route path="/homePage/chengPULScard" exact component={chengPULScard} />
                        <Route path="/login" exact component={login} />
                        <Route path="/mine" exact component={mine} />
                        {/* exact绝对匹配 */}
                        <Redirect exact path="/" to="/homePage"/>
                        <Redirect exact path="/theatre/theatreList" to="/theater"/>
                        <Redirect exact path="/https://m.juooo.com/eticket/mine" to="/ticketFolder"/>
                        <Redirect exact path="/myjuooo/myjuooo" to="/login"/>
                    </Switch>
            </Fragment>
        )
    }
}