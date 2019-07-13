import ListView from '@/components/temCommon/listView/listView'
import React, { Component } from 'react';
import MineStyle from './mineStyle'
import Store from 'storejs'
let good = require("@/img/good.png")
let mineBg = require("@/img/mineBg.jpg")
let six = require("@/img/666.png")
class mine extends Component {
    constructor() {
        super()
        this.state = {
            url:'',
            name:''
        }
    }
    render() {
        return (
            <MineStyle>
                <div className = "top_box">
                     <img className = 'bg' src={mineBg} alt=""/>
                     <div className = 'userInfo'>
                        <div className = "headPro">
                            <img src={this.state.url} alt=""/>
                        </div>
                        <div className ="uname">
                            <h2>{this.state.name}</h2>
                            <div className = 'quit' onClick ={this.quit.bind(this)}>退出登录</div>
                        </div>
                        <div className = 'icon'>
                            <i className="fa fa-angle-right"></i>
                        </div>
                     </div>
                </div>
                <div className = "img_box">
                    <img src={good} alt=""/>
                </div>
            </MineStyle>
        )
    }
    quit() {
        Store.clear()
        this.props.history.push("/")
    }
    componentWillMount() {
        let userInfo =  Store.get("userInfo");
        if (!userInfo) {
            this.props.history.push("/login")
            return;
        }
        let url = userInfo.avatar;
        let name = userInfo.username;
        this.setState({url})
        this.setState({name})
      }
}

export default mine;