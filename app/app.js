/**
 * Created by Rains
 * on 2016-10-20.
 */

import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import "./stylesheets/foundation.min.css"
import "./stylesheets/main.css";
import "./javascripts/foundation.min.js"


const LinkBelongTo = {
    Me : 0,
    Other: 1
}

class LoadingBar extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="row">
                <div className="small-12 columns normal-padding loading-bar-border">
                    <div className="loading-bar-background"></div>
                    <div className="loading-bar-progress"></div>
                </div>
            </div>
        );
    }

}

class CountDown extends Component{

    constructor(props){
        super(props);
    }

    render(){
        const style = {
            width:"7rem"
        };
        return (
            <div className="count-down">
                <div className="row">
                    <div className="small-3 columns">
                        <div className="row">
                            <div className="small-12 columns padding-clear">
                                <span className="count-down-title">剩余天</span>
                            </div>
                            <div className="small-12 columns padding-clear">
                                <span className="count-down-value">{this.props.day}</span>
                            </div>
                        </div>
                    </div>
                    <div className="small-3 columns">
                        <div className="row">
                            <div className="small-12 columns padding-clear">
                                <span className="count-down-title">时</span>
                            </div>
                            <div className="small-12 columns padding-clear">
                                <span className="count-down-value">{this.props.hour}</span>
                            </div>
                        </div>
                    </div>
                    <div className="small-3 columns">
                        <div className="row">
                            <div className="small-12 columns padding-clear">
                                <span className="count-down-title">分</span>
                            </div>
                            <div className="small-12 columns padding-clear">
                                <span className="count-down-value">{this.props.minute}</span>
                            </div>
                        </div>
                    </div>
                    <div className="small-3 columns">
                        <div className="row">
                            <div className="small-12 columns padding-clear">
                                <span className="count-down-title">秒</span>
                            </div>
                            <div className="small-12 columns padding-clear">
                                <span className="count-down-value">{this.props.second}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


class ActionButton extends Component{

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        const tag = event.target.value;
        console.info(event.target);
        if(tag == "buy"){
            console.info("我要购买");
        }else if(tag == "help"){
            console.info("找人帮砍");
        }else{
            console.info("我也要参与");
        }
    }

    render(){
        console.info("this.props.linkBelongTo : " + this.props.linkBelongTo);
        if(this.props.isBelongTo == LinkBelongTo.Me){
            return (
                <div className="row">
                    <div className="small-6 columns normal-padding">
                        <span className="action-button gradient1" onClick={this.handleClick} value="buy">立即购买</span>
                    </div>
                    <div className="small-6 columns normal-padding">
                        <span className="action-button gradient2" onClick={this.handleClick}>找人帮砍</span>
                    </div>
                </div>
            );
        }else{
            return (
                <div className="row">
                    <div className="small-12 columns normal-padding">
                        <span className="action-button gradient1" onClick={this.handleClick}>我也要参加</span>
                    </div>
                </div>
            );
        }
    }
}


class Container extends React.Component {

    constructor(props) {
        super(props);
    }

    //组件将要挂载时调用
    componentWillMount() {

    }

    //当组件加载到DOM中之后调用
    componentDidMount() {

    }

    //组件将要更新时调用
    componentWillMount() {

    }

    //是否让组件进行更新,返回true 或者false
    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    //组件状态更新时调用
    componentDidUpdate(prevProps, prevState) {

    }


    componentWillUnmount() {
        console.log("App will unmount");
    }

    render() {
        return (
            <div className="container">
                <LoadingBar/>
                <CountDown day="05" hour="23" minute="10" second="06"/>
                <ActionButton isBelongTo="0"/>
            </div>
        );
    }

}

ReactDOM.render(
    <Container/>,
    document.getElementById('container')
)
