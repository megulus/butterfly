import React, {Component, PropTypes} from 'react';
import Store from '../flux/Store';

class Rating extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: Store.getRating(this.props.qnNumber),
            tmpRating: Store.getRating(this.props.qnNumber)
        };
        Store.addListener('change', () => {
            this.setState({
                rating: Store.getRating(this.props.qnNumber),
                tmpRating: Store.getRating(this.props.qnNumber)
            })
        });
    }

    setTemp(rating) {
        // on mouse over
        this.setState({
            tmpRating: rating
        });
    }

    setRating(rating) {
        Store.setRating(this.props.qnNumber, rating);
    }

    reset() {
        // on mouse out, go back to real rating
        this.setTemp(this.state.rating);
    }

    render() {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span
                    className={i <= this.state.tmpRating ? 'RatingOn' : null}
                    onClick={this.setRating.bind(this, i)}
                    onMouseOver={this.setTemp.bind(this, i)}>
                    &#9734;
                </span>
            );
        }
        return (
            <div className="Rating" onMouseOut={this.reset.bind(this)}>
                {stars}
            </div>
        );
    }


}

Rating.propTypes = {
    qnNumber: PropTypes.number.required
};

export default Rating