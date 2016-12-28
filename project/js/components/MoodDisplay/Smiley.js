
import classNames from 'classnames';
import React, { Component, PropTypes } from 'react';

import styles from './MoodDisplay.css';

class Smiley extends Component {

    render() {
        const sizeClass = this.props.moodSet
            ? null
            : styles.small;
        return (
            <div className={classNames(styles.smiley, styles[this.props.moodClass], sizeClass)}></div>
        );
    }
}




Smiley.propTypes = {
    moodClass: PropTypes.string,
    small: PropTypes.bool
};

/*Smiley.defaultProps = {
    moodClass: 'three',
    small: false
};*/

export default Smiley
