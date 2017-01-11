import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setUserAnswer, setAdditionalInput } from '../../actions/questionsActions';



class AnswerInput extends Component {


    handleChange(event) {
        this.setAnswer(event);
    }


    setAnswer(event) {
        let value = event.target.value;
        if (this.props.qnNumber) {
            this.props.dispatch(setUserAnswer(this.props.qnNumber, value));
        } else {
            this.props.dispatch(setAdditionalInput(value));
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


export default connect()(AnswerInput)
