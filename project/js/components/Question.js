import React, {Component, PropTypes} from 'react';
import Rating from './Rating';
import AnswerInput from './AnswerInput';
import Store from '../flux/Store';

class Question extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lowRating: Store.getRating(this.props.qnNumber)
                ? Store.getRating(this.props.qnNumber) <= 2
                : null
        };
        Store.addListener('change', () => {
            this.setState({
                lowRating: Store.getRating(this.props.qnNumber)
                    ? Store.getRating(this.props.qnNumber) <= 2
                    : null
            })
        });
    }


    render() {
        if (this.state.lowRating) {
            let ref = 'question_' + this.props.qnNumber;
            return (
                <div>
                    {this.props.question}
                    <Rating qnNumber={this.props.qnNumber}/>
                    <AnswerInput qnNumber={this.props.qnNumber} ref={ref}/>
                </div>
            );
        } else {
            return (
                <div>
                    {this.props.question}
                    <Rating qnNumber={this.props.qnNumber}/>
                </div>
            );
        }

    }

}

Question.propTypes = {
    question: PropTypes.string.required,
    qnNumber: PropTypes.number.required
};

export default Question