import React, { Component } from 'react';
import { connect } from 'react-redux';


import AnswerInput from './AnswerInput';
import Rating from './Rating/Rating';

import styles from './Questions.css';


@connect((store) => {
    return {
        ratings: store.questions.userRatings
    }
})

class Question extends Component {


    render() {
        let inputProps = {
            qnNumber: this.props.qnNumber,
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
                { this.props.rating <= 2
                    ? <AnswerInput {...inputProps} />
                    : null}
            </div>
        );
    }

}


export default Question