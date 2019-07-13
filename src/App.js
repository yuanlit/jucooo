import React, { Component } from 'react';
// import logo from './logo.svg';
// 引入淘宝响应式
import 'lib-flexible/flexible.js'
// import axios from 'axios';
// 引入路由
// import Route from "@/router"
import GlobalStyle from "@/styles/css/styledGlobal";
// import FooterNav from "@/components/layout/footerNav"
import Home from '@/components/Home'
//引入详情页
// import ShowInfo from '@/components/main/showInfo/ShowInfo'
// import ShowInfo from "@/components/main/showInfo/showInfo"

//在app.js里面引入  框架css
import 'antd-mobile/dist/antd-mobile.css';


import './App.css';
class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle/>
        <Home/>
      </div>
    )
  }
  componentDidMount () {

  } 
}

export default App;

