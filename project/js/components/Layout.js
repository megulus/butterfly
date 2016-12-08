import React, { Component } from 'react';

import Footer from './Footer';
import Header from './Header';


class Layout extends Component {

    render() {
        const { query } = this.props.location;
        const { v } = query;
        console.log({ query });
        console.log(query);
        console.log(v);
        return (
            <div>
                <Header />
                <Footer />
            </div>
        );
    }
}

export default Layout
