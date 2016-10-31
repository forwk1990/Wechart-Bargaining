import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './LoadingBar.css'


class LoadingBar extends Component{

    constructor(props){
        super(props);
    }

    render(){
        var money = (this.props.money * 0.0001).toFixed(2);
        return (
            <div className="row">
                <div className="small-12 columns padding-normal">
                    <div className="row">
                        <div className="small-12 columns">
                            <div className="row tip">
                                <div className="small-12 columns padding-clear">
                                    <span className="tip-content">¥{money}万</span>
                                </div>
                                <div className="small-12 columns padding-clear">
                                    <span className="tip-flag">现价</span>
                                </div>
                                <span className="tip-triangle"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="small-12 columns padding-normal loading-bar-border">
                    <div className="loading-bar-background"></div>
                    <div className="loading-bar-progress"></div>
                </div>
            </div>
        );
    }

}

export default LoadingBar
