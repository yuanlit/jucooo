import React, { Component } from 'react';
import GradeStyle from './gradeStyle'
import axios from 'axios'

class grade extends Component {
    render() {
        return (
            <GradeStyle>
                <div className = "title_box">
                    <div className = "left">
                    <i onClick ={this.quit.bind(this)} className="fa fa-angle-left"></i>
                    </div>
                    <div className ="center">
                        <h3>积分商城</h3>
                    </div>
                    <div className ='right'>
                        <h3>...</h3>
                    </div>
                </div>
                <div className="grade_box">
                    <div className ='grade'>
                        <i className="fa fa-stack-exchange"></i>
                        <span>4</span>
                    </div>
                    <div className ="mixi">
                        <p>积分明细 <i className="fa fa-angle-right"></i></p>
                    </div>
                </div>
                <div className = "select_box">
                    <div className ="select">
                        <p>
                            <span>全国</span>
                            <i className="fa fa-angle-down"></i>
                        </p>
                        <p>
                            <span>全部</span>
                            <i className="fa fa-angle-down"></i>
                        </p>
                    </div>
                </div>
            </GradeStyle>
        );
    }
    componentWillMount () {
        this.getAllScoresList((res)=>{
            console.log(res)
        })
    }
    quit() {
    this.props.history.push("/homePage")
    }
    // 定义接口
    getAllScoresList (callback) {
        let data = {
            type: '0',
            city: '0',
            page: '1',
        }
        axios({
            url:"apis/Scores/getAllScoresList",
            params: data,
            method: 'POST'
        }).then((res) =>{
            callback(res)
        })
    }
}

export default grade;