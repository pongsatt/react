import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Nav from './components/nav/Nav';

import './app.scss';

class App extends Component{
    getMenuItems(){
        const {formValids, route, routes} = this.props;
        const {childRoutes} = route;
        
        // let items = [
        //     {path: '/registration', label: 'Registration'},
        //     {path: '/clientProfile', label: 'Client Profile'},
        //     {path: '/review', label: 'Review'},
        // ];
        let items = childRoutes.map(r => {
            return {path: r.path, 
                label: r.label, 
                error: formValids[r.path] === false,
                active: r.path == routes[1].path
            };
        });
        
        return items;
    }
    
    render() {
        const {pathname} = this.props.location;
        return <div className="row">
            <Nav items={this.getMenuItems()} activePath={pathname}/>
            <div className="col-xs-offset-2 col-xs-8">
                {this.props.children}
            </div>
        </div>
    }
};

const mapStateToProps = (state) => {
  return {
    formValids: state.form.formValids
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (name, value) => {
      dispatch(setFormValue(name, value))
    },
    onValidate: (name, valid) => {
      dispatch(setFormValue(name, valid))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
