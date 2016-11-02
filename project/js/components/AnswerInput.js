import React, {Component, PropTypes} from 'react';

class AnswerInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    render() {
        let prompt = this.props.type === 'extra'
            ? 'This is where you can express yourself freely.'
            + ' Your answers will always remain anonymous.'
            : '';
        console.log('value: ' + this.state.value);
        return (
            <input type="text" placeholder={prompt} ref={this.props.ref} onChange={this.handleChange.bind(this)} />
        );
    }

}

AnswerInput.propTypes = {
    qnNumber: PropTypes.number,
    type: PropTypes.string.required
};

export default AnswerInput