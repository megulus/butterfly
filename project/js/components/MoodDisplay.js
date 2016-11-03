import React, {Component, PropTypes} from 'react';
import Store from '../flux/Store';
import SelectedMood from './SelectedMood';
import MoodSelector from './MoodSelector';

class MoodDisplay extends Component {

    constructor() {
        super();
        this.state = {
            moodUnset: Store.getMood() === null
        };
        Store.addListener('moodchange', () => {
            this.setState({
                moodUnset: Store.getMood() === null
            })
        });
    }

    render() {
        if (!this.state.moodUnset) {
            return (
                <SelectedMood />
            );
        } else {
            return (
                <MoodSelector />
            );
        }
    }
}


export default MoodDisplay