import React, {Component, PropTypes} from 'react';
import Store from '../flux/Store';
import SelectedMood from './SelectedMood';
import Smiley from './Smiley';

class MoodDisplay extends Component {

    constructor(props) {
        super(props); // do I need this? or only if I create a (FormInput) parent class?
        this.state = {
            mood: Store.getMood(),
            moodText: Store.getMoodText(),
            moodClass: Store.getMoodClass(),
            editing: false
        };
    }

    render() {
        if (!this.state.editing) { // TODO: unset mood in Store instead?
            return (
                <div><SelectedMood /></div>
            );
        }
        /*const smileyProps = {
            moodClass: this.state.moodClass,
            small: this.state.editing
        };
        return (
            <div>
                <div className="smiley-box"><Smiley {...smileyProps} /></div>
                <div>{this.state.moodClass}</div>
            </div>
        );*/
    }
}

MoodDisplay.PropTypes = {
    defaultValue: PropTypes.number,
    editing: PropTypes.bool
};

MoodDisplay.defaultProps = {
    defaultValue: 3,
    editing: false
};

export default MoodDisplay