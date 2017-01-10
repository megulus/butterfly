import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';


/*import AnswerInput from './AnswerInput';*/
import Rating from './Rating/Rating';

import styles from './Questions.css';


import classNames from 'classnames';

@connect((store) => {
    return {
        ratings: store.questions.userRatings
    }
})

class Question extends Component {


    render() {
        let inputProps = {
            qnIndex: this.props.qnIndex,
            type: 'question'
        };
        return (
            <div className={styles.question}>
                <div className={classNames('bold', 'dark-grey-text')}>{this.props.question}</div>
                <Rating qnNumber={this.props.qnIndex}/>
                <div className={styles.legend}>
                    <span className={styles.legendLeft}>Disagree</span>
                    <span className={styles.legendRight}>Agree</span>
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