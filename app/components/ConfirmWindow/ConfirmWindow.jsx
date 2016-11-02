

import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import "./ConfirmWindow.scss"

import $ from 'jquery';



class ConfirmWindow extends Component {

    constructor(props) {
        super(props);
        this.state = {visible:1};
        this.handleCloseClick = this.handleCloseClick.bind(this);
        this.handleSaveClick = this.handleSaveClick.bind(this);
    }

    handleCloseClick(){
        this.setState({visible:0});
    }

    handleSaveClick(){
        this.setState({visible:0});
    }

    componentDidMount(){

    }

    render() {
        const title = "填写购买信息"
        return (
            <div ref="confirmContainer">
                {this.state.visible == 1 ? (
                    <div className="confirm-modal">
                        <div className="confirm-modal-bg"></div>
                        <ReactCSSTransitionGroup
                            transitionEnter={false}
                            transitionLeave={true}
                            transitionLeaveTimeout={1000}
                            transitionAppear={true}
                            transitionAppearTimeout={1000}
                            transitionName={ {
                            leave: 'tip-content-leave',
                            leaveActive: 'tip-content-leave-active',
                            appear: 'tip-content-appear',
                            appearActive: 'tip-content-appear-active'
                      } } component="div">
                            <div className="confirm-modal-content" key="confirm-modal-content">
                                <div className="row">
                                    <div className="small-12 columns">
                                        <p className="confirm-title">{title}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="small-12 columns">
                                        <p className="confirm-product-name">商品：奥迪A8</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="small-12 columns">
                                        <p className="confirm-product-origin-price">原价：¥666万</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="small-12 columns">
                                        <p className="confirm-product-price">现价：¥640万</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="small-12 columns">
                                        <input className="confirm-input-name" placeholder="收件人姓名" type="text"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="small-12 columns">
                                        <input className="confirm-input-phone" placeholder="联系电话" type="text"/>
                                    </div>
                                </div>
                                <div className="row confirm-action-group">
                                    <div className="small-6 columns padding-normal">
                                        <span className="action-button gradient1" onClick={this.handleCloseClick} value="buy">取消</span>
                                    </div>
                                    <div className="small-6 columns padding-normal">
                                        <span className="action-button gradient2" onClick={this.handleSaveClick}>保存</span>
                                    </div>
                                </div>
                            </div>
                        </ReactCSSTransitionGroup>
                    </div>
                ) : (<div></div>)}
            </div>
        );
    }

}

export default ConfirmWindow
