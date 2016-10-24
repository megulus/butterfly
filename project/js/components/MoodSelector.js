import React, {Component, PropTypes} from 'react';
import Smiley from './Smiley';
import Store from '../flux/Store';


class MoodSelector extends Component {

    render() {
        const smileyProps = {
            //moodClass: Store.getMoodClass(),
            small: true
        };
        let smileys = [];
        for (let i = 5; i > 0; i--) {
            smileyProps.moodClass = Store.getMoodClass({mood: i});
            smileys.push(<Smiley {...smileyProps}/>)
        }
        return (
            <div>
                <div>Did you make a mistake? Please select your correct mood:</div>
                <div>{smileys}</div>
            </div>
        );
    }

}

export default MoodSelector