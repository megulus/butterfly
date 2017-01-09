import React, {Component} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

import MoodSelector from './MoodSelector';
import SelectedMood from './SelectedMood';

import styles from './MoodDisplay.css';

@connect((store) => {
    return {
        moodClass: store.mood.mood.moodClass,
        moodSet: store.mood.moodSet,
    }
})

class MoodDisplay extends Component {


    render() {
        return this.props.moodSet
            ? (
            <div className="row">
                <div className="col-md-4"></div>
                <div className={classNames('col-md-4', styles.moodDisplayContnr)}>
                    <SelectedMood moodClass={this.props.moodClass}/>
                </div>
            </div>)
            : (<MoodSelector />);

    }
}


export default MoodDisplay
