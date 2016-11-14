import React, {Component, PropTypes} from 'react';
import Rating from './Rating';
import AnswerInput from './AnswerInput';
import Store from '../flux/Store';
import classNames from 'classnames';

class Question extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lowRating: Store.getRating(this.props.qnNumber)
                ? Store.getRating(this.props.qnNumber) <= 2
                : null
        };
        Store.addListener('ratingset', () => {
            this.setState({
                lowRating: Store.getRating(this.props.qnNumber)
                    ? Store.getRating(this.props.qnNumber) <= 2
                    : null
            })
        });
    }


    render() {
        if (this.state.lowRating) {
            //let ref = 'question_' + this.props.qnNumber;
            let inputProps = {
                qnNumber: this.props.qnNumber,
                type: 'question'
            };
            return (
                <div className={classNames("question", "white-bkgrnd")}>
                    <p>{this.props.question}</p>
                    <Rating qnNumber={this.props.qnNumber}/>
                    <p>Disagree<span></span>Agree</p>
                    <AnswerInput {...inputProps}/>
                </div>
            );
        } else {
            return (
                <div className={classNames("question", "white-bkgrnd")}>
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