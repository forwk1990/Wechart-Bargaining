import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import "./ReactTrasitionGroupTest.scss"

//require('./ReactTrasitionGroupTest.scss')



class ReactTrasitionGroupTest extends Component {

    constructor(props) {
        super(props);
        this.state = {items: ['hello', 'world', 'click', 'me']};
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd() {
        const newItems = this.state.items.concat([
            prompt('Enter some text')
        ]);
        this.setState({items: newItems});
    }

    handleRemove(i) {
        let newItems = this.state.items.slice();
        newItems.splice(i, 1);
        this.setState({items: newItems});
    }

    render() {
        const items = this.state.items.map((item, i) => (
            <div key={item} onClick={() => this.handleRemove(i)}>
                {item}
            </div>
        ));
        return (
            <div>
                <button onClick={this.handleAdd}>Add Item</button>
                <ReactCSSTransitionGroup
                    transitionAppear={true}
                    transitionAppearTimeout={1000}
                    transitionLeaveTimeout={1000}
                    transitionEnterTimeout={3000}
                    transitionName={ {
                        enter: 'enter',
                        enterActive: 'example-enter-active',
                        leave: 'leave',
                        leaveActive: 'tryme',
                        appear: 'example-appear',
                        appearActive: 'example-appear-active'
                      } }>
                    {items}
                </ReactCSSTransitionGroup>
            </div>
        );
    }

}

export default ReactTrasitionGroupTest
