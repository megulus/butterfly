import React, {Component, PropTypes} from 'react';
import Store from '../flux/Store';

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

    setAnswer() {
        if (this.props.qnNumber) {
            Store.setAnswer(this.props.qnNumber, this.state.value);
        } else {
            Store.setAdditional(this.state.value);
        }
    }

    render() {
        let prompt = this.props.type === 'extra'
            ? 'This is where you can express yourself freely.'
            + ' Your answers will always remain anonymous.'
            : '';
        return (
            <div>
                <textarea
                    placeholder={prompt}
                    onChange={this.handleChange.bind(this)}
                    onBlur={this.setAnswer.bind(this)}>
                </textarea>
            </div>
        );
    }

}

AnswerInput.propTypes = {
    qnNumber: PropTypes.number,
    type: PropTypes.string.required
};

export default AnswerInput