import React, { Component } from 'react';
import { connect } from 'react-redux';

import { resetLowRating } from '../../actions/questionsActions';

import AnswerInput from './AnswerInput';
import Rating from './Rating/Rating';


import styles from './Questions.css';


@connect((store) => {
    return {
        ratings: store.questions.userRatings,
        ratingChanges: store.questions.ratingChanges,
    }
})

class Question extends Component {



    render() {
        let rating = this.props.ratings[this.props.qnIndex];
        let lowRating = rating === 1 || rating === 2;
        let inputProps = {
            qnNumber: this.props.qnIndex,
            type: 'question'
        };
        return (
            <div className={styles.question}>
                <div>{this.props.question}</div>
                <Rating qnNumber={this.props.qnIndex}/>
                <div className={styles.legend}>
                    <span className={styles.legendLeft}>Disagree</span>
                    <span className={styles.legendRight}>Agree</span>
                </div>
                { lowRating
                    ? <AnswerInput {...inputProps}/>
                    : null}
            </div>
        );
    }

}


export default Question