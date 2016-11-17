import React, {Component, PropTypes} from 'react';
import Store from '../flux/Store';
import classNames from 'classnames';


class Rating extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: Store.getRating(this.props.qnNumber),
            tmpRating: null,
            //copyRating: null,
        };
        /*Store.addListener('ratingset', () => {
         this.setState({
         rating: Store.getRating(this.props.qnNumber),
         tmpRating: Store.getRating(this.props.qnNumber)
         })
         });*/
    }

    setTemp(rating) {
        // on mouse over
        // experiment: set tmpRating, unset rating TODO: get rid of this comment
        this.setState({
            tmpRating: rating,
            //copyRating: this.state.rating,
            //rating: null,
        });
    }

    setRating(rating) {
        Store.setRating(this.props.qnNumber, rating);
        this.setState({
            tmpRating: null,
            rating: rating,
            //copyRating: rating
        });
    }

    reset() {
        // on mouse out, go back to real rating
        // experiment: unset tmpRating TODO: get rid of this comment
        //this.setTemp(this.state.rating);
        //console.log('reset ' + this.state.copyRating);
        this.setState({
            //rating: this.state.copyRating,
            tmpRating: null,
            //copyRating: null
        });
    }

    getClass(i) {
        if (this.state.tmpRating && this.state.rating) {
            if (i === this.state.tmpRating) {
                return 'RatingTmp star-selected-box';
            } else if (i < this.state.tmpRating) {
                return 'RatingOnTmp';
            } else {
                return null;
            }
        } else if (this.state.tmpRating) {
            return (i <= this.state.tmpRating)
                ? 'RatingTmp'
                : null;
        } else if (this.state.rating) {
            if (i < this.state.rating) {
                return 'RatingOn';
            } else if (i === this.state.rating) {
                return 'RatingSelected star-selected-box';
            } else {
                return null;
            }
        } else {
            return null;
        }
    }

    getHighlightClass(i) {
        if (this.state.rating && !this.state.tmpRating) {
            return i === this.state.rating
                ? 'highlight-box-' + i
                : null;
        } else if (this.state.rating && this.state.tmpRating) {
            return i <= this.state.tmpRating
                ? 'highlight-box-' + i
                : null;
        } else {
            return null;
        }
    }


    /*componentDidUpdate() {
        console.log('\nrating: ' + this.state.rating);
        console.log('temp: ' + this.state.tmpRating);
        console.log('copy: ' + this.state.copyRating);
    }*/

    render() {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            let starOverboxName = 'star-overbox-' + i;
            stars.push(
                <div>
                    <div className={this.getHighlightClass(i)}></div>
                    <div className={starOverboxName}>
                        <span
                            //className={i <= this.state.tmpRating ? 'RatingOn' : null}
                            className={classNames(this.getClass(i), 'star-box', 'star')}
                            key={i}
                            onClick={this.setRating.bind(this, i)}
                            onMouseOver={this.setTemp.bind(this, i)}
                            onMouseOut={this.reset.bind(this)}>{}
                        </span>
                    </div>
                </div>
            );
        }
        return (
            <div>
                <div className={classNames('Rating')}>
                    {stars}
                </div>
            </div>

        );
    }


}

Rating.propTypes = {
    qnNumber: PropTypes.number.required
};

export default Rating