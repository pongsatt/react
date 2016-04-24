import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

import './chevron.scss';

export default React.createClass({
    
    render() {
        const {previous, next, hidePrevious, hideNext} = this.props;
        const leftClass = classNames('arrow left', {'hidden': hidePrevious})
        const rightClass = classNames('arrow right', {'hidden': hideNext})
        
        return (
        <div>
            <a href="#" className={leftClass} onClick={previous}></a>
            <a href="#" className={rightClass} onClick={next}></a>
        </div>
        );
    }
});