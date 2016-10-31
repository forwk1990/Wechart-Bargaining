import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './ActionButton.css'

const LinkBelongTo = {
    Me : 0,
    Other: 1
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
        if(this.props.isBelongTo == LinkBelongTo.Me){
            return (
                <div className="row action-button-group">
                    <div className="small-6 columns padding-normal">
                        <span className="action-button gradient1" onClick={this.handleClick} value="buy">立即购买</span>
                    </div>
                    <div className="small-6 columns padding-normal">
                        <span className="action-button gradient2" onClick={this.handleClick}>找人帮砍</span>
                    </div>
                </div>
            );
        }else{
            return (
                <div className="row action-button-group">
                    <div className="small-12 columns padding-normal">
                        <span className="action-button gradient1" onClick={this.handleClick}>我也要参加</span>
                    </div>
                </div>
            );
        }
    }
}

export default ActionButton