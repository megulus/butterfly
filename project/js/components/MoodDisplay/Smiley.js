
import classNames from 'classnames';
import React, { Component, PropTypes } from 'react';


class Smiley extends Component {

    render() {
        const sizeClass = this.props.moodSet
            ? null
            : 'small';
        return (
            <div className={classNames(this.props.moodClass, sizeClass)}></div>
        );
    }
}

/*const Smiley = props =>
    props.small
        ? <div className={classNames(props.moodClass, 'small')}></div>
        : <div className={classNames(props.moodClass, 'smiley')}></div>;*/


Smiley.propTypes = {
    moodClass: PropTypes.string,
    small: PropTypes.bool
};

/*Smiley.defaultProps = {
    moodClass: 'three',
    small: false
};*/

export default Smiley
