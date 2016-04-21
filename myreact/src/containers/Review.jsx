import React from 'react';
import {connect} from 'react-redux';

export class Review extends React.Component {
    render(){
        return <div>
                Review
            </div>
    }
}

function mapStateToProps(state) {
  return {
    mystate: state.data.get('mystate')
  };
}

export const ReviewContainer = connect(mapStateToProps)(Review);
