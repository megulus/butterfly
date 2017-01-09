import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';


/*import AnswerInput from './AnswerInput';*/
/*import Rating from './Rating';*/


import classNames from 'classnames';

@connect((store) => {
    return {
        ratings: store.questions.userRatings
    }
})

class Question extends Component {


    render() {
        console.log(this.props);
        let inputProps = {
            qnIndex: this.props.qnIndex,
            type: 'question'
        };
        return (
            <div className={classNames("question", "white-bkgrnd")}>
                <div className={classNames('bold', 'dark-grey-text')}>{this.props.question}</div>
                {/*<Rating qnNumber={this.props.qnIndex}/>*/}
                <div className={classNames('legend', 'small-text', 'lt-grey-text')}>
                    <span className={classNames('disagree')}>Disagree</span>
                    <span className={classNames('agree')}>Agree</span>
                </div>
                { this.props.rating <= 2
                    ? {/*<AnswerInput {...inputProps} />*/}
                    : null}
            </div>
        );
    }

}

/*Question.propTypes = {
    question: PropTypes.string.required,
    qnNumber: PropTypes.number.required
};*/

export default Question