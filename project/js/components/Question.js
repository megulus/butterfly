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
            console.log('lowrating');
            let inputProps = {
                qnNumber: this.props.qnNumber,
                type: 'question'
            };
            return (
                <div className={classNames("question", "white-bkgrnd")}>
                    <div className={classNames('bold', 'dark-grey-text')}>{this.props.question}</div>
                    <Rating qnNumber={this.props.qnNumber}/>
                    <div className={classNames('legend', 'small-text', 'lt-grey-text')}>
                        <span className={classNames('disagree')}>Disagree</span>
                        <span className={classNames('agree')}>Agree</span>
                    </div>
                    <AnswerInput {...inputProps}/>
                </div>
            );
        } else {
            return (
                <div className={classNames("question", "white-bkgrnd")}>
                    <div className={classNames('bold', 'dark-grey-text')}>{this.props.question}</div>
                    <Rating qnNumber={this.props.qnNumber}/>
                    <div className={classNames('legend', 'small-text', 'lt-grey-text')}>
                        <span className={classNames('disagree')}>Disagree</span>
                        <span className={classNames('agree')}>Agree</span>
                    </div>
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