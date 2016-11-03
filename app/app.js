/**
 * Created by Itachi
 * on 2016-10-20.
 */

import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import FastClick from 'fastclick';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TipWindow from './components/TipWindow/TipWindow.jsx';
import ConfirmWindow from './components/ConfirmWindow/ConfirmWindow.jsx';
import $ from 'jquery';

import DataStore from './javascripts/components/DataStore.js'

import "animate.css"
import "./stylesheets/foundation.min.css"
import "./stylesheets/main.css";
import "./javascripts/foundation.min.js"
import "./javascripts/String.js"

import ActionButton from './components/ActionButton/ActionButton.jsx';
import CountDown from './components/CountDown/CountDown.jsx';
import LoadingBar from './components/LoadingBar/LoadingBar.jsx';
import Tab from './components/Tab/Tab.jsx';
require("./components/Test/ReactTrasitionGroupTest.scss");


class Container extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          originalPrice:58
        };
    }

    //组件将要挂载时调用
    componentWillMount() {

    }

    //当组件加载到DOM中之后调用
    componentDidMount() {
        /*
        * @reason:
        *  mobile browsers will wait approximately 300ms from the time that you tap the button to fire the click event
        * */
        FastClick.attach(document.body);

        this.getBargainInfo();
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

    getBargainInfo(){
        DataStore.getBargainInfo({url:'',code:'',id:''}).then(function(data){
            console.info(data);
        },function(error){
            console.info(error);
        });
    }

    render() {
        return (
            <div className="container" onTouchMove={(e) => {console.info(e);}}>
                <CountDown dateString="2016/11/08 12:00:00"/>
                <div className="row rule">
                    <divc className="small-12 columns padding-normal">
                        <a href="#action-rule" className="rule-link">活动规则</a>
                    </divc>
                </div>
                <LoadingBar price="290000" originalPrice="580000"/>
                <ActionButton isBelongTo="0"/>
                <Tab/>
                <TipWindow mode="me"/>
            </div>
        );
    }

}

ReactDOM.render(
    <Container/>,
    document.getElementById('container')
)
