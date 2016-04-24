import React, {PropTypes} from 'react';
import { Router, Route, Link } from 'react-router'
import className from 'classnames';

import NavItem from './NavItem';
import Chevron from './Chevron'

import './nav.css';

export default React.createClass({
    contextTypes: {
        router: PropTypes.object.isRequired,
    },
    
    getIndex(){
        const {items, activePath} = this.props;
        return items.findIndex(i => i.active);
    },
    
    previous(){
        const {items} = this.props;
        const {router} = this.context;
        
        const newIndex = this.getIndex() - 1;
        router.push(items[newIndex].path);
    },
    
    next(){
        const {items} = this.props;
        const {router} = this.context;
        const newIndex = this.getIndex() + 1;
        router.push(items[newIndex].path);
    },
    
    render() {
        const {items, activePath} = this.props;
        
        const index = this.getIndex();
        const hideNext = index == items.length - 1;
        const hidePrevious = index == 0;
        
        return (
            <div>
                <div className="stepwizard">
                    <div className="stepwizard-row setup-panel row">
                        {
                            items && items.map((item, index) => 
                                <NavItem key={index}
                                    path={item.path} 
                                    label={item.label} 
                                    error={item.error}
                                    active={item.active}/>
                                )
                        }
                    </div>
                </div>
            <Chevron hidePrevious={hidePrevious} hideNext={hideNext} previous={this.previous} next={this.next}/>
        </div>
        );
    }
});