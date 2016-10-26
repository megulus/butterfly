import React, {Component, PropTypes} from 'react';
import Store from '../flux/Store';

class Question extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lowRating: Store.getRating(this.props.qnNumber)
                ? Store.getRating(this.props.qnNumber) <= 2
                : null
        };
    }

    render() {
        return (
            <div>{this.props.question}</div>
        );
    }

}

Question.propTypes = {
    question: PropTypes.string.required,
    qnNumber: PropTypes.number.required
};

export default Question