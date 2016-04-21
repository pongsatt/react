import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

export class Test extends React.Component {
    render(){
        return <div>
                <h1>Test</h1>
            </div>
    }
}

function mapStateToProps(state) {
  return {
    mystate: state.data.get('mystate')
  };
}

export const TestContainer = connect(mapStateToProps, actionCreators)(Test);