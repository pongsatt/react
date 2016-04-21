import React, {PropTypes} from 'react';
import { Router, Route, Link } from 'react-router'

import Chevron from './Chevron'

import './nav.css';

export default React.createClass({
    contextTypes: {
        router: PropTypes.object.isRequired,
        store: PropTypes.object.isRequired,
    },
    
    previous(){
    },
    
    next(){
        
    },
    
    render() {
        return (
            <div>
                <div className="stepwizard">
                    <div className="stepwizard-row setup-panel row">
                        <div className="stepwizard-step col-xs-4">
                            <Link to="/" className="btn btn-primary btn-circle"></Link>
                            <p>Registration</p>
                        </div>
                        <div className="stepwizard-step col-xs-4">
                            <Link to="/clientProfile" className="btn btn-danger btn-circle"></Link>
                            <p>Client Profile</p>
                        </div>
                        <div className="stepwizard-step col-xs-4">
                            <Link to="/review" className="btn btn-default btn-circle disabled"></Link>
                            <p>Review</p>
                        </div>
                    </div>
                </div>
            <Chevron previous={this.previous} next={this.next}/>
        </div>
        );
    }
});