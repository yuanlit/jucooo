import { PullToRefresh, Button } from 'antd-mobile';
import React from 'react'
import ReactDOM from 'react-dom';

function genData() {
  const dataArr = [];
  for (let i = 0; i < 10; i++) {
    dataArr.push(i);
  }
  return dataArr;
}

class listView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      height: document.documentElement.clientHeight,
      data: [],
    };
  }

  componentDidMount() {
    console.log(this.state.height)
    const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
    setTimeout(() => this.setState({
      height: hei,
      data: genData(),
    }), 0)
  }

  render() {
    return (<div>
      <PullToRefresh
        damping={60}
        ref={el => this.ptr = el}
        style={{
          height: this.state.height,
          overflow: 'auto',
        }}
        direction={'up'}
        refreshing={this.state.refreshing}
        onRefresh={() => {
          this.setState({ refreshing: true });
          setTimeout(() => {
            this.setState({ refreshing: false });
          }, 1000);
        }}
      >
        {this.state.data.map(i => (
          <div key={i} style={{ textAlign: 'center', padding: 20 }}>
            {this.state.down ? 'pull down' : 'pull up'} {i}
          </div>
        ))}
      </PullToRefresh>
    </div>);
  }
}

export default listView