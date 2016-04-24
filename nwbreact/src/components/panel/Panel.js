import React, { Component } from 'react';

export default React.createClass({
  render() {
    return (
        <div className="panel-group">
            <div className="panel panel-default">
                <div className="panel-body">
                    {this.props.children}
                </div>
            </div>
        </div>
    );
  }
});