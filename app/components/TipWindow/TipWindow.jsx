import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import "./TipWindow.scss"

import $ from 'jquery';


class TipWindow extends Component {

    constructor(props) {
        super(props);
        this.state = {visible: 1};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({visible: 0});
    }

    componentDidMount() {

    }

    render() {
        const title = this.props.mode == "me" ? "为自己砍了" : "你帮TA砍了"
        return (
            <div ref="tipContainer">
                <ReactCSSTransitionGroup
                    transitionEnter={false}
                    transitionAppear={false}
                    transitionLeave={true}
                    transitionLeaveTimeout={1000}
                    transitionName={ {
                            leave: 'tip-content-leave',
                            leaveActive: 'tip-content-leave-active'
                      } } component="div">
                    {this.state.visible == 1 ? (
                        <div className="tip-modal">
                            <div className="tip-modal-bg"></div>
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
                                <div className="tip-modal-content open">
                                    <p className="title">{title}</p>

                                    <p className="cut-price">¥8500</p>

                                    <p className="product-name">奥迪A8</p>

                                    <p className="product-origin-price">原价¥666万</p>

                                    <p className="product-price">现价¥640万</p>

                                    <div className="row know">
                                        <div className="small-12 columns padding-normal">
                                            <span className="action-button gradient1"
                                                  onClick={this.handleClick}>我知道了</span>
                                        </div>
                                    </div>
                                </div>
                            </ReactCSSTransitionGroup>
                        </div>
                    ) : (<div></div>)}
                </ReactCSSTransitionGroup>
            </div>
        );
    }

}

export default TipWindow
