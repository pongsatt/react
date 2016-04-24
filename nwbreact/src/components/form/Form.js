import React, { PropTypes } from 'react';

export default React.createClass({
    
    render() {
        return (
            <form className="form-horizontal">
                <fieldset>
                    {this.props.children}
                </fieldset>
            </form>
        );
    }
});