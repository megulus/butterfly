import React, {Component, PropTypes} from 'react';
import Store from '../flux/Store';

class Question extends Component {

    constructor() {
        super();
        this.state = {
            lowRating: Store.getRating() ? Store.getRating() <= 2 : null
        };
    }

    render() {
        return (
            <div>{this.props.question}</div>
        );
    }

}

Question.propTypes = {
    question: PropTypes.string.required
};

export default Question