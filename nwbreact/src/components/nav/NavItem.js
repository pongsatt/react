import React, {PropTypes} from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

export default React.createClass({
    
    render() {
        const {path, label, active, error, disabled} = this.props;
        const classes = classNames(
            'btn btn-circle', 
            {'btn-primary': active},
            {'btn-default': !active},
            {'btn-danger': error},
            {'disabled': disabled},
            );
        return (
        <div className="stepwizard-step col-xs-4">
            <Link to={path} className={classes}></Link>
            <p>{label}</p>
        </div>
        );
    }
});