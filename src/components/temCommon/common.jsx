import styled from 'styled-components'

// 一个好看的按钮
const ButtonPlus = styled.button`
    line-height: 1.499;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    padding: 0 15px;
    font-size: 14px;
    border-radius: 4px;
    height: 32px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-transition: all .3s cubic-bezier(.645,.045,.355,1);
    transition: all .3s cubic-bezier(.645,.045,.355,1);
    position: relative;
    -webkit-box-shadow: 0 2px 0 rgba(0,0,0,.015);
    box-shadow: 0 2px 0 rgba(0,0,0,.015);
    color: rgba(0,0,0,.65);
    background-color: #fff;
    border-color: #d9d9d9;
`;

export default 
    ButtonPlus
