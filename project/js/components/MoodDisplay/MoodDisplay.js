import React, {Component} from 'react';
import classNames from 'classnames';
import {connect} from 'react-redux';

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
        let moodContent = this.props.moodSet
            ?   <div className={classNames(styles.moodDisplayContnr)}>
                    <SelectedMood moodClass={this.props.moodClass} />
                </div>
            : <MoodSelector/>;
        return (
            <div className="row">
                <div className="col-md-4"></div>
                <div className={'col-md-4'}>
                    {moodContent}
                </div>
            </div>
        );
    }
}


export default MoodDisplay
