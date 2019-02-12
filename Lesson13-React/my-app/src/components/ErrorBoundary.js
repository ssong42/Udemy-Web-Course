import React, {Component} from 'react';

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
        }
    }

    //gets error and input as parameter
    componentDidCatch() {
        this.setState({hasError: true})
    }

    render () {
        if (this.state.hasError) {
            return <h1>OOOPs that is not good</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundry;