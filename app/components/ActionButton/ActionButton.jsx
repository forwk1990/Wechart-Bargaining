import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './ActionButton.css'
import ConfirmWindow from '../ConfirmWindow/ConfirmWindow.jsx';

const LinkBelongTo = {
    Me: 0,
    Other: 1
}

class ActionButton extends Component {

    constructor(props) {
        super(props);

        this.handleBuyClick = this.handleBuyClick.bind(this);
        this.handleHelpClick = this.handleHelpClick.bind(this);
        this.handleJoinClick = this.handleJoinClick.bind(this);
    }

    /*
    * 立即购买按钮点击事件
    * */
    handleBuyClick(event){

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


    render() {
        return this.props.isMine == 1
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
            </div>);
    }
}

export default ActionButton