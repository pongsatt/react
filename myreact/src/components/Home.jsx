import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

export class Home extends React.Component {
    render(){
        return <div>
                <h1>Hello</h1>
            </div>
    }
}

function mapStateToProps(state) {
  return {
    mystate: state.data.get('mystate')
  };
}

export const HomeContainer = connect(mapStateToProps, actionCreators)(Home);