
import classNames from 'classnames';
import React, { Component, PropTypes } from 'react';

import styles from './MoodDisplay.css';

class Smiley extends Component {

    render() {
        const sizeClass = this.props.moodSet
            ? styles.smileyLg
            : styles.smileySm;
        return (
            <div className={classNames(styles[this.props.moodClass], sizeClass)}></div>
        );
    }
}




Smiley.propTypes = {
    moodClass: PropTypes.string,
    small: PropTypes.bool
};



export default Smiley
