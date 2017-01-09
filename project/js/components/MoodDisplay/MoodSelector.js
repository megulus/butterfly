import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

import Smiley from './Smiley';

import {setMood} from '../../actions/moodActions';

import styles from './MoodDisplay.css';

@connect((store) => {
    return {
        moodSet: store.mood.moodSet,
        availableMoods: store.mood.availableMoods,
    }
})

class MoodSelector extends Component {

    setMood(mood) {
        this.props.dispatch(setMood(mood));
    }

    render() {
        const smileyProps = {
            small: true
        };
        const availableMoods = this.props.availableMoods;
        let smileys = [];
        for (let i = 5; i > 0; i--) {
            smileyProps.mood = i;
            smileyProps.moodClass = availableMoods[i].moodClass;
            smileys.push(
                <div
                    className={styles.smileyBoxSm}
                    onClick={this.setMood.bind(this, smileyProps.mood)}
                    key={i}>
                    <Smiley {...smileyProps} />
                </div>)
        }
        return (
            <div className="row">
                <div className="col-md-4"></div>
                <div className={classNames(styles.moodSelectorBox)}>
                    <div className={styles.moodSelectorBanner}>
                        Did you make a mistake? Please select your correct mood:
                    </div>
                    <div>
                        <div>{smileys}</div>
                    </div>
                </div>
            </div>

        );
    }

}


export default MoodSelector
