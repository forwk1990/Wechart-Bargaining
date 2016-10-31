/**
 * Created by Itachi
 * on 2016-10-20.
 */

import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ActionButton from './components/ActionButton/ActionButton.jsx';
import CountDown from './components/CountDown/CountDown.jsx';
import LoadingBar from './components/LoadingBar/LoadingBar.jsx';
import "./stylesheets/foundation.min.css"
import "./stylesheets/main.css";
import "./javascripts/foundation.min.js"

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
                <CountDown day="05" hour="23" minute="10" second="06"/>
                <div className="row rule">
                    <divc className="small-12 columns padding-normal">
                        <a href="#" className="rule-link">活动规则</a>
                    </divc>
                </div>
                <LoadingBar money="464000"/>
                <div className="row">
                    <div className="small-6 columns padding-normal">
                        <span className="price">原价¥{this.state.originalPrice}万</span>
                    </div>
                    <div className="small-6 columns padding-normal">
                        <span className="product">奥迪A8</span>
                    </div>
                </div>
                <ActionButton isBelongTo="0"/>
            </div>
        );
    }

}

ReactDOM.render(
    <Container/>,
    document.getElementById('container')
)
