import React, {Component, PropTypes} from 'react';
import Store from '../flux/Store';
import SelectedMood from './SelectedMood';
import MoodSelector from './MoodSelector';

class MoodDisplay extends Component {

    constructor(props) {
        super(props); // do I need this?
        this.state = {
            editing: Store.getMood() === null
        };
        Store.addListener('change', () => {
            this.setState({
                editing: Store.getMood() === null
            })
        });
    }

    render() {
        if (!this.state.editing) {
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

/*MoodDisplay.PropTypes = {
    //defaultValue: PropTypes.number,
    //editing: PropTypes.bool
};

MoodDisplay.defaultProps = {
    //defaultValue: 3,
    //editing: false
};*/

export default MoodDisplay