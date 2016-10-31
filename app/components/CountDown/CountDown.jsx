import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './CountDown.css'


class CountDown extends Component{

    constructor(props){
        super(props);
        this.state = {
            day:0,
            hours:0,
            minutes:0,
            seconds:0
        };
    }

    getSeconds(dateString){

        // 截止日期转化为秒
        const deadlineSeconds = Date.parse(dateString) * 0.001;

        // 当前日期转化为秒
        const currentSeconds = Date.parse(new Date()) * 0.001;

        // 还剩多少秒
        const diffSeconds = deadlineSeconds - currentSeconds;
        const diffDate = new Date(diffSeconds);

        const self = this;
        setInterval(function()
        {
            self.setState({
                day:diffDate.getDay(),
                hours:diffDate.getHours(),
                minutes:diffDate.getMinutes(),
                seconds:diffDate.getSeconds()
            });
        }, 1000);
    }

    render(){
        this.getSeconds("2016-11-01 00:09:00");
        return (
            <div className="row count-down">
                <div className="small-3 columns">
                    <div className="row">
                        <div className="small-12 columns padding-clear">
                            <span className="count-down-title">剩余天</span>
                        </div>
                        <div className="small-12 columns padding-clear">
                            <span className="count-down-value">{this.state.day}</span>
                        </div>
                    </div>
                </div>
                <div className="small-3 columns">
                    <div className="row">
                        <div className="small-12 columns padding-clear">
                            <span className="count-down-title">时</span>
                        </div>
                        <div className="small-12 columns padding-clear">
                            <span className="count-down-value">{this.state.hours}</span>
                        </div>
                    </div>
                </div>
                <div className="small-3 columns">
                    <div className="row">
                        <div className="small-12 columns padding-clear">
                            <span className="count-down-title">分</span>
                        </div>
                        <div className="small-12 columns padding-clear">
                            <span className="count-down-value">{this.state.minutes}</span>
                        </div>
                    </div>
                </div>
                <div className="small-3 columns">
                    <div className="row">
                        <div className="small-12 columns padding-clear">
                            <span className="count-down-title">秒</span>
                        </div>
                        <div className="small-12 columns padding-clear">
                            <span className="count-down-value">{this.state.seconds}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default CountDown
