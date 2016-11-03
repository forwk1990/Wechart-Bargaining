/**
 * Created by Itachi
 * on 2016-10-20.
 */

import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import FastClick from 'fastclick';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TipWindow from './components/TipWindow/TipWindow.jsx';


import DataStore from './javascripts/components/DataStore.js'

import "animate.css"
import "./stylesheets/foundation.min.css"
import "./stylesheets/main.css";
import "./javascripts/foundation.min.js"
import "./javascripts/String.js"
import $ from 'jquery'

import ActionButton from './components/ActionButton/ActionButton.jsx';
import CountDown from './components/CountDown/CountDown.jsx';
import LoadingBar from './components/LoadingBar/LoadingBar.jsx';
import Tab from './components/Tab/Tab.jsx';
require("./components/Test/ReactTrasitionGroupTest.scss");


class Container extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ready: false,
            originalPrice: 58,
            shouldBargin: false,
            money: 0,
            price: 0,
            originalPrice: 0,
            name: "",
            deadline: '',
            isMine:0
        };
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


        $(document).foundation();

        /*
        * 获取首页显示的砍价信息
        * */
        DataStore.getBargainInfo({url: '', code: '', id: ''}).then(function (responseObject) {
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

    render() {
        return this.state.ready ? (
            <div className="container" onTouchMove={(e) => {console.info(e);}}>
                <CountDown deadline={this.state.deadline}/>
                <div className="row rule">
                    <divc className="small-12 columns padding-normal">
                        <a href="#action-rule" className="rule-link">活动规则</a>
                    </divc>
                </div>
                <LoadingBar price={this.state.price} originalPrice={this.state.originalPrice}/>
                <ActionButton isMine={this.state.isMine}/>
                <Tab/>
                {this.state.shouldBargin && (
                    <TipWindow name={this.state.name}
                               isMine={true}
                               money={this.state.money}
                               price={this.state.price}
                               originalPrice={this.state.originalPrice}/>)}
            </div>
        ) : (<img src={require('./images/loading.gif')} alt='loading' className="loading"/>);
    }

}

ReactDOM.render(
    <Container/>,
    document.getElementById('container')
)
