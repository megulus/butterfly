import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setMood } from '../actions/moodActions';

import Footer from './Footer';
import Header from './Header/Header';


@connect((store) => {
    return {
        moodSet: store.mood.moodSet,
        mood: store.mood.mood,
    }
})

class Layout extends Component {

    componentWillMount() {
        const { query } = this.props.location;
        const { v } = query;
        /*console.log({ query });
        console.log(query);
        console.log(v);*/
        this.props.dispatch(setMood(v));
    }

    render() {
        const { mood } = this.props;
        return (
            <div>
                <Header />
                <div>{mood.moodText}</div>
                <Footer />
            </div>
        );
    }
}

export default Layout
