'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Store from './flux/Store';
import AppView from './components/AppView';



function getUrlParam(search) {
    const acceptableValues = ['1', '2', '3', '4', '5'];
    let hashes = search.slice(search.indexOf('?') + 1).split('&');
    let params = {};
    hashes.map(hash => {
        let [key, val] = hash.split('=');
        params[key] = decodeURIComponent(val);
    });
    return (params['v'] && acceptableValues.includes(params['v'])) ? params['v'] : '3';
}

let v = getUrlParam(window.location.search);
Store.init(v);


ReactDOM.render(
    <AppView />,
    document.getElementById('app')
);




