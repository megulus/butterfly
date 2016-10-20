
import classNames from 'classnames';
import React, {Component, PropTypes} from 'react';

const Smiley = props =>
    props.small
        ? <div className={classNames(props.moodClass, 'small')}></div>
        : <div className={classNames(props.moodClass, 'smiley')}></div>;


Smiley.propTypes = {
    moodClass: PropTypes.string,
    small: PropTypes.bool
};

Smiley.defaultProps = {
    moodClass: 'three',
    small: false
};

export default Smiley
