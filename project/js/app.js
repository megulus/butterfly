'use strict';

import Logo from './components/Logo';
import MoodDisplay from './components/MoodDisplay';
import React from 'react';
import ReactDOM from 'react-dom';
import Store from './flux/Store';


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
//console.log(v);
Store.init(v);


ReactDOM.render(
    <div className="container">
        <div className="app-header row">
            <div className="col-md-1"><Logo /></div>
            <div className="col-md-10 h4">Butterfly Inc.</div>
        </div>
        <div className="row">
            <MoodDisplay />
        </div>
    </div>,
    document.getElementById('app')
);




