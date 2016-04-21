import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Nav from './components/nav/Nav';

import './app.scss';

export default React.createClass({
    render() {
        return <div className="row">
        <Nav/>
        <div className="col-xs-offset-2 col-xs-8">
            {this.props.children}
        </div>
        </div>
    }
})
