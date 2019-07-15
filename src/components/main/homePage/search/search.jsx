import React, { Component } from 'react';
import Search from './searchStyle'
import SearchTab from './searchTab/searchTab'
import axios from 'axios'
// 引入展示那一块
import TagList from './tagList/tagList'
class search extends Component {
    constructor() {
        super()
        this.state = {
            tagList: ['猫', '罗密欧与朱丽叶', '摇滚红与黑', '小猪佩奇', '林宥嘉', '西城男孩'],
            tag: '',
            tatal: '',
            dataList: []
        }
    }
    render() {
        if(this.state.dataList.length > 0 ) {
            return (
                <Search>
                    <SearchTab tag={this.state.tag} getTag={this.getTag.bind(this)}></SearchTab>
                    <ul>
                        {
                            this.state.dataList.map((item, index) => {
                                return (
                                    <TagList key ={index} data = {item}></TagList>
                                )
                            })
                        }
                    </ul>
                    
                </Search>
            )
        }else {
            return (
                <Search>
                    <SearchTab tag={this.state.tag} getTag={this.getTag.bind(this)}></SearchTab>
                    <div className="hot_box">
                        <h3>热门搜索</h3>
                        <div className="tag">
                            {
                                this.state.tagList.map((item, index) => {
                                    return (
                                        <span key={index} onClick={this.setTxet.bind(this, item)}>{item}</span>
                                    )
                                })
                            }
                        </div>
                    </div>
                </Search>
            )
        }
    }
    setTxet(item) {
        this.setState({tag:item})
        this.getData(item, (res) => {
            if (res.data.data.result_type === 1) {
                var items = res.data.data;
                this.setState({ tatal: items.tatal })
                this.setState({ dataList: items.list })
            }
        })
    }
    getTag(res) {
        if (res) {
            this.getData(res, (res) => {
                if (res.data.data.result_type === 1) {
                    var item = res.data.data;
                    this.setState({ tatal: item.tatal })
                    this.setState({ dataList: item.list })
                }
            })
        }else {
            this.setState({dataList:''})
        }
    }
    // 调取接口区域
    getData(key, callback) {
        let data = {
            'keywords': key,
            'page': '1',
            'sort_type': '1',
            'version': '5.1.4',
            'referer': '2'
        }
        let timer = setInterval(()=>{
            console.log("疯狂刷接口中....")
            axios({
                method: 'get',
                url: 'apis/Search/getShowList',
                params: data
            }).then(res => {
                if(res) {
                    callback(res)
                    clearInterval(timer)
                }
            })
            setTimeout (()=> {
                clearInterval(timer)
            },3000) 
        },100)
    }
}

export default search;
