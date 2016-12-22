import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setMood } from '../actions/moodActions';

import Footer from './Footer';
import Header from './Header/Header';
import MoodDisplay from './MoodDisplay/MoodDisplay';
import Submitted from './Submitted/Submitted';


@connect((store) => {
    return {
        moodSet: store.mood.moodSet,
        mood: store.mood.mood,
        canSubmit: store.submit.canSubmit,
        submitted: store.submit.submitted,
    }
})

class Layout extends Component {

    componentWillMount() {
        const { query } = this.props.location;
        const { v } = query;
        const initialMood = v ? v : 3;
        this.props.dispatch(setMood(initialMood));
    }

    render() {
        //const { mood } = this.props;
        const currState  = this.props;
        console.log(currState.submitted);
        const mainContent =  currState.submitted
            ? <Submitted />
            : <MoodDisplay />;
        return (
            <div>
                <Header />
                {mainContent}
                <Footer />
            </div>
        );
    }
}

export default Layout
