import React, {Component } from 'react';
import { connect } from 'react-redux';

import Edit from './Edit';
import Smiley from './Smiley';

import { unsetMood } from '../../actions/moodActions';

import styles from './MoodDisplay.css';

@connect((store) => {
    return {
        mood: store.mood.mood,
        moodSet: store.mood.moodSet,
    }
})
class SelectedMood extends Component {

    unsetMood() {
        this.props.dispatch(unsetMood());
    }

    render() {
        const { mood } = this.props;
        const smileyProps = {
            moodClass: mood.moodClass,
            moodSet: this.props.moodSet,
        };
        return (
            <div>
                <div className={styles.smileyBoxLg}>
                    <Smiley {...smileyProps} />
                    <div onClick={this.unsetMood.bind(this)}><Edit /></div>
                </div>
                <p className={styles.moodText}>{mood.moodText}</p>
                <p className={styles.selectedMoodBanner}>THANK YOU FOR YOUR FEEDBACK</p>
            </div>
        );
    }


}



export default SelectedMood




