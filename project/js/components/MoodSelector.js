import React, {Component, PropTypes} from 'react';
import Smiley from './Smiley';
import Store from '../flux/Store';


class MoodSelector extends Component {

    setMood(mood) {
        Store.setMood(mood);
    }

    render() {
        const smileyProps = {
            small: true
        };
        let smileys = [];
        for (let i = 5; i > 0; i--) {
            smileyProps.mood = i;
            smileyProps.moodClass = Store.getMoodClass({mood: i});
            smileys.push(
                <div className="smiley-box-sm" onClick={this.setMood.bind(this, smileyProps.mood)}>
                    <Smiley {...smileyProps} />
                </div>)
        }
        return (
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4 white-bkgrnd">
                    <div>Did you make a mistake? Please select your correct mood:</div>
                    <div>{smileys}</div>
                </div>
                <div className="col-md-4"></div>
            </div>

        );
    }

}

export default MoodSelector