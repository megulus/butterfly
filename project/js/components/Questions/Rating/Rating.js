import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    setUserRating,
    unsetTmpRating,
    setTmpRating,
    ratingChange } from '../../../actions/questionsActions';
import { checkIfSubmissible } from '../../../actions/submissionActions';

import styles from '../../Questions/Rating/Rating.css';

import classNames from 'classnames';


@connect((store) => {
    return {
        ratings: store.questions.userRatings,
        tmpRatings: store.questions.userTmpRatings,
    }
})

class Rating extends Component {


    setTemp(rating) {
        this.props.dispatch(setTmpRating(this.props.qnNumber, rating));
    }

    setRating(rating) {
        this.props.dispatch(setUserRating(this.props.qnNumber, rating));
        this.props.dispatch(ratingChange());
        this.props.dispatch(checkIfSubmissible());
     }

    reset() {
        // on mouse out, go back to real rating
        this.props.dispatch(unsetTmpRating());
    }

    getStarClass(i) {
        let rating = this.props.ratings[this.props.qnNumber];
        let tmpRating = this.props.tmpRatings[this.props.qnNumber];
        if (rating) {
            if (i < rating && i !== tmpRating) {
                return styles.RatingOn;
            } else if (i === rating && i === tmpRating) {
                return classNames(styles.RatingTmp, styles.starSelectedBox) ;
            } else if (i === tmpRating) {
                return styles.RatingTmp;
            } else if (i === rating) {
                return classNames(styles.RatingSelected, styles.starSelectedBox);
            }
        } else {
            if (i === tmpRating) {
                return styles.RatingTmp;
            }
        }
    }

    getHighlightClass(i) {
        let rating = this.props.ratings[this.props.qnNumber];
        return i <= rating
            ? styles['highlight' + i]
            : null;
     }


    render() {
        const qnNumber = this.props.qnNumber;
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            let starOuterboxStyle = styles['starOuterBox' + i];
            stars.push(
                <div key={qnNumber+i}>
                    <div className={this.getHighlightClass(i)} key={qnNumber+i*2}></div>
                    <div className={starOuterboxStyle} key={qnNumber+i*3}>
                        <span
                            className={classNames(this.getStarClass(i), styles.starInnerBox, styles.star)}
                            onClick={this.setRating.bind(this, i)}
                            key={i}
                            onMouseOver={this.setTemp.bind(this, i)}
                            onMouseOut={this.reset.bind(this)}
                        >{}
                        </span>
                    </div>
                </div>
            );
        }
        return (
            <div>
                <div className={classNames(styles.Rating)}>
                    {stars}
                </div>
            </div>

        );
    }


}


export default Rating