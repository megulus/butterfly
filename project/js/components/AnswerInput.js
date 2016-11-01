import React, {Component, PropTypes} from 'react';

class AnswerInput extends Component {

    getValue() {
        return this.refs.input.value
            ? this.refs.input.value
            : this.refs.input.getValue();
    }

    setAnswer() {
        let answer = this.getValue();
        //console.log(answer);
    }

    render() {
        let prompt = this.props.id
            ? 'This is where you can express yourself freely.'
            + 'Your answers will always remain anonymous.'
            : '';
        return (
            <input type="text" placeholder={prompt} ref={this.props.ref} onChange={this.setAnswer.bind(this)} />
        );
    }

}

AnswerInput.propTypes = {
    qnNumber: PropTypes.number,
    ref: PropTypes.string
};

export default AnswerInput