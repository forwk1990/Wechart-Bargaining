/**
 * Created by Rains
 * on 2016-10-20.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import "../stylesheets/main.css";



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
                <h1>Hello world, NBA</h1>
            </div>
        );
    }

}

ReactDOM.render(
    <Container/>,
    $('#container')[0]
)
