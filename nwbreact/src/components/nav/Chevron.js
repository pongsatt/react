import React, {PropTypes} from 'react';
import { Router, Route, Link } from 'react-router'

import './chevron.scss';

export default React.createClass({
    
    render() {
        return (
        <div>
            <a href="#" className="arrow left" onClick={this.props.previous}></a>
            <a href="#" className="arrow right" onClick={this.props.next}></a>
        </div>
        );
    }
});