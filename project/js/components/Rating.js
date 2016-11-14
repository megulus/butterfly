import React, {Component, PropTypes} from 'react';
import Store from '../flux/Store';
import classNames from 'classnames';


class Rating extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: Store.getRating(this.props.qnNumber),
            tmpRating: null,
            copyRating: null,
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
        console.log('reset ' + this.state.copyRating);
        this.setState({
            //rating: this.state.copyRating,
            tmpRating: null,
            //copyRating: null
        });
    }

    getClass(i) {
        if (this.state.tmpRating && this.state.rating) {
            if (i <= this.state.rating && i <= this.state.tmpRating) {
                return 'RatingOnTmp star-selected-box';
            } else if (i > this.state.rating && i <= this.state.tmpRating) {
                return 'RatingTmp'
            } else {
                return null;
            }
        } else if (this.state.tmpRating) {
            return (i <= this.state.tmpRating)
                ? 'RatingTmp'
                : null;
        } else if (this.state.rating) {
            return (i <= this.state.rating)
                ? 'RatingOn star-selected-box'
                : null;
        } else {
            return null;
        }
    }



    componentDidUpdate() {
        console.log('\nrating: ' + this.state.rating);
        console.log('temp: ' + this.state.tmpRating);
        console.log('copy: ' + this.state.copyRating);
    }

    render() {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span
                    //className={i <= this.state.tmpRating ? 'RatingOn' : null}
                    className={classNames(this.getClass(i), 'star-box', 'star')}
                    key={i}
                    onClick={this.setRating.bind(this, i)}
                    onMouseOver={this.setTemp.bind(this, i)}
                    onMouseOut={this.reset.bind(this)}>{}</span>
            );
        }
        return (
            <div className={classNames('Rating')} >
                {stars}
            </div>
        );
    }


}

Rating.propTypes = {
    qnNumber: PropTypes.number.required
};

export default Rating