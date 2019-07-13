import { SearchBar} from 'antd-mobile';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class SearchBarExample extends Component {
  state = {
    value: '',
  }
//   componentWillReceiveProps(nextProps) {
//     // this.setState({value:nextProps.tag})
// }
  onChange= (value) => {
    this.props.getTag(value)
    this.setState({ value });
  }
  clear = () => {
    this.setState({ value: '' });
  }
  handleClick = () => {
    this.manualFocusInst.focus();
  }
  render() {
   
    return (<div>
      <SearchBar
        value = {this.state.value}
        placeholder="搜索热门演出"
        onCancel={() => 
          this.props.history.push("/homePage")
        }
        showCancelButton
        onChange={this.onChange}
      />
    </div>);
  }
}

export default withRouter(SearchBarExample);