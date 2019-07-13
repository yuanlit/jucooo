import React, { Component } from 'react';
import LoginStyle from './loginStyle' 
import ButtonPlus from '@/components/temCommon/common'
import axios from 'axios'
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';
import Store from 'storejs'


class login extends Component {
    constructor () {
        super()
        this.state = {
            uname:'',
            upwd:''
        }
    }
    render() {
        return (
            <LoginStyle>
                <div className ="quit">
                    <i className="fa fa-angle-left"></i>
                </div>
                <div className = "title">
                    <h2>欢迎来到聚橙网</h2>
                </div>
                <div className ="login_box">
                    <form>
                        <ul>
                            <li>
                                <input  value={this.state.uname} onChange = {this.changeUname.bind(this)} type="text" placeholder = "请输入账号/手机号"/>
                            </li>
                            <li>
                                <input value={this.state.upwd} onChange = {this.changeUpwd.bind(this)}  type="password" placeholder = "请输入密码"/>
                            </li>
                        </ul>
                        <ButtonPlus type="button" onClick = {this.Submit.bind(this)}>登录</ButtonPlus>
                    </form>
                </div>
                <div className ='setInfo'>
                    <span className ="forget">忘记密码?</span>
                    <span className ="yz">去注册</span>
                </div>
                <div className ="footer_icon">
                <i className="fa fa-qq"></i>
                <i className="fa fa-weibo"></i>
                </div>
            </LoginStyle>
        );
    }
    componentWillMount() {
      let userInfo =  Store.get("userInfo");
      if (userInfo) {
          this.props.history.push("/mine")
      }
    }
    // 输入用户名
    changeUname (e) {
        this.setState({uname:e.target.value})
    }
    // 输入密码
    changeUpwd (e) {
        this.setState({upwd:e.target.value})
    }
    // 提交
    Submit() {
        if(!this.state.uname) {
            this.showToastNoMask("请输入用户名")
            return
        } else if (!this.state.upwd){
            this.showToastNoMask("兄弟，密码不能为空")
            return
        }
        // 信息收集
        let userInfo = {
            uname : this.state.uname,
            upwd : this.state.upwd,
        }
       this.loadingToast()
        axios({
            method: 'get',
            url: '/login',
            params: userInfo
          }).then((res)=> {
              if (res.data.status === 1 ) {
                  this.successToast(res.data)
                 Store.set('userInfo',res.data.data)
              }else if (res.data.status === 0){
                  this.failToast(res.data)
              }
          })
    }
    loadingToast() {
        Toast.loading('Loading...', 1, () => {
        //   console.log('Load complete !!!')
        })
    }
    failToast(d) {
        Toast.fail(d.msg, 1)
      }
    successToast(d) {
        Toast.success(d.msg, 1)
        setTimeout(()=> {
            this.props.history.push("/mine")
        },1000)
    }
    showToastNoMask(d) {
        Toast.info(d, 2, null, false);
    }
}

export default login;