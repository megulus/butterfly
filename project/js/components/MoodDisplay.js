import React, {Component, PropTypes} from 'react';
import Store from '../flux/Store';
import SelectedMood from './SelectedMood';
import MoodSelector from './MoodSelector';
import classNames from 'classnames';

class MoodDisplay extends Component {

    constructor() {
        super();
        this.state = {
            moodUnset: Store.getMood() === null,
            mood: Store.getMood(),
            moodText: Store.getMoodText(),
            moodClass: Store.getMoodClass(Store.getMood())
        };
        Store.addListener('moodchange', () => {
            this.setState({
                moodUnset: Store.getMood() === null
            })
        });
    }

    render() {
        if (!this.state.moodUnset) {
            let selectedProps = {
                mood: this.state.mood,
                moodClass: this.state.moodClass
            };
            return (
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className={classNames('col-md-4')}>
                        <SelectedMood {...selectedProps} />
                    </div>
                </div>

            );
        } else {
            return (
                <MoodSelector />
            );
        }
    }
}


export default MoodDisplay
