/**
 * Created by Itachi
 * on 2016-10-20.
 */

import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import FastClick from 'fastclick';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TipWindow from './views/TipWindow/TipWindow.jsx';
import ConfirmWindow from './views/ConfirmWindow/ConfirmWindow.jsx';

import DataStore from './libs/components/DataStore.js'

import QueryString from 'query-string'

import "animate.css"
import "./assets/stylesheets/foundation.min.css"
import "./assets/stylesheets/main.scss";
import $ from 'jquery';

import CountDown from './views/CountDown/CountDown.jsx';
import LoadingBar from './views/LoadingBar/LoadingBar.jsx';
import Tab from './views/Tab/Tab.jsx';


class Container extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isConfirmWindowDisplay:false,
            ready: false,
            originalPrice: 58,
            shouldBargin: false,
            money: 0,
            price: 0,
            originalPrice: 0,
            name: "",
            deadline: '',
            isMine:0,
            isDisplayRuleTab :false
        };
        this.ruleLinkHandleClick = this.ruleLinkHandleClick.bind(this);
        this.handleBuyClick = this.handleBuyClick.bind(this);
        this.handleHelpClick = this.handleHelpClick.bind(this);
        this.handleJoinClick = this.handleJoinClick.bind(this);
    }

    //组件将要挂载时调用
    componentWillMount() {

    }

    //当组件加载到DOM中之后调用
    componentDidMount() {
        let self = this;
        /*
         * @reason:
         *  mobile browsers will wait approximately 300ms from the time that you tap the button to fire the click event
         * */
        FastClick.attach(document.body);

        /*
        * 获取查询字符串
        * */
        var queryString = QueryString.extract("http://www.bj-evetime.com/kanjia/index.html?code=003E8gop0XsQQq1wgNmp0aLcop0E8go3&state=product=233&origin=23");
        var queryItems = QueryString.parse(queryString);
        const code = queryItems["code"];
        const product = QueryString.parse(queryItems["state"])["product"];
        if(!code || !product)return;

        /*
        * 获取首页显示的砍价信息
        * */
        DataStore.getBargainInfo({url: 'http://www.bj-evetime.com/kanjia/index.html', code: code, id: product}).then(function (responseObject) {
            responseObject["isFirst"] && self.setState({shouldBargin: true});

            self.setState({
                    ready: true,
                    money: responseObject.money,
                    price: responseObject.price,
                    originalPrice: responseObject.originalPrice,
                    name: responseObject.name,
                    deadline: responseObject.deadline,
                    isMine:responseObject.isMine
                }
            );
        }, function (error) {

        });
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

    ruleLinkHandleClick(){
        this.setState({isDisplayRuleTab:true});
        $('html, body').animate({
            scrollTop: $("#tab").offset().top
        }, 500);
    }

    /*
     * 立即购买按钮点击事件
     * */
    handleBuyClick(event){
        this.setState({
            isConfirmWindowDisplay:true
        });
    }

    /*
     * 找人帮砍按钮点击事件
     * */
    handleHelpClick(event){

    }

    /*
     * 我也要参加点击事件
     * */
    handleJoinClick(event){

    }

    /*
    * 确认弹窗回调
    * */
    confirmCallback(){
        this.setState({
            isConfirmWindowDisplay:false
        });
    }

    render() {

        return this.state.ready ? (
            <div className="container" onTouchMove={(e) => {console.info(e);}}>
                <CountDown deadline={this.state.deadline}/>
                <div className="row rule">
                    <div className="small-12 columns padding-normal">
                        <a href="#tab" className="rule-link" onClick={this.ruleLinkHandleClick}>活动规则</a>
                    </div>
                </div>
                <LoadingBar name={this.state.name} price={this.state.price} originalPrice={this.state.originalPrice}/>
                {this.state.isMine
                ? (
                <div className="row action-button-group" key="action-button-group">
                    <div className="small-6 columns padding-normal">
                        <span className="action-button gradient1" onClick={this.handleBuyClick} value="buy">立即购买</span>
                    </div>
                    <div className="small-6 columns padding-normal">
                        <span className="action-button gradient2" onClick={this.handleHelpClick}>找人帮砍</span>
                    </div>
                </div>)
                : (
                <div className="row action-button-group">
                    <div className="small-12 columns padding-normal">
                        <span className="action-button gradient1" onClick={this.handleJoinClick}>我也要参加</span>
                    </div>
                </div>)}
                <Tab isDisplayRuleTab={this.state.isDisplayRuleTab}/>
                {this.state.shouldBargin && (
                    <TipWindow name={this.state.name}
                               isMine={true}
                               money={this.state.money}
                               price={this.state.price}
                               originalPrice={this.state.originalPrice}/>)}
                {this.state.isConfirmWindowDisplay && (
                    <ConfirmWindow name={this.state.name}
                               price={this.state.price}
                               originalPrice={this.state.originalPrice} closeCallback={()=>{this.confirmCallback()}}/>)}

            </div>
        ) : (<img src={require('./assets/images/loading.gif')} alt='loading' className="loading"/>);
    }

}

ReactDOM.render(
    <Container/>,
    document.getElementById('container')
)
