import React from 'react';
class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ date: new Date() });
    }

    handleWithParams(param) {
        
        this.setState({
            date: param
          });
      }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <button onClick={this.handleClick}>Click me</button>
                <button onClick={this.handleWithParams.bind(this,new Date())}>
                    Click Here</button>
            </div>
        );
    }
}
export default Toggle;