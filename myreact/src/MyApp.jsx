import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import * as actionCreators from './action_creators';
import AppBar from 'material-ui/lib/app-bar';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import { Router } from 'react-router';
import RaisedButton from 'material-ui/lib/raised-button';
import Paper from 'material-ui/lib/paper';
import { Grid, Row, Col } from 'react-bootstrap';
import NavChevronRight from 'material-ui/lib/svg-icons/navigation/chevron-right';
import NavChevronLeft from 'material-ui/lib/svg-icons/navigation/chevron-left';

const containerStyle = {
    minHeight: 500
}

const styles = {
    panel :{
        width: '100%',
        minHeight: containerStyle.minHeight,
        display: 'inline-block'
    },
    chevron: {
        display: 'flex',
        alignItems: 'center',
        minHeight: containerStyle.minHeight
    },
    content: {
        margin: 20
    }
};


export class MyApp extends React.Component {
    handleActive(route){
        this.context.router.push(route);
    }
    
    next(){
        const {route} = this.props;
        const currentIndex = this._getCurrentIndex(route);
        this.context.router.push(route.childRoutes[currentIndex+1].path);
    }
    
    previous(){
        const {route} = this.props;
        const currentIndex = this._getCurrentIndex(route);
        this.context.router.push(route.childRoutes[currentIndex-1].path);
    }
    
    _getCurrentIndex(route){
        return route.childRoutes.findIndex((childRoute, index, array) => {
            return childRoute.path === this.props.routes[1].path;
        });
    }

    render(){
        const { route } = this.props;
        const currentIndex = this._getCurrentIndex(route);
        const {data} = this.props;
        const {registration, clientProfile} = data;
        
        const regValid = registration.valid == null || registration.valid;
        const clientProfileValid = clientProfile.valid == null || clientProfile.valid;
        const disabledNavs = !registration.valid;
        
        var leftChevron;
        if(currentIndex > 0) leftChevron = <FloatingActionButton onTouchTap={()=>this.previous()}><NavChevronLeft /></FloatingActionButton>;
        
        var rightChevron;
        if(currentIndex < route.childRoutes.length-1) rightChevron = <FloatingActionButton onTouchTap={()=>this.next()} disabled={disabledNavs}><NavChevronRight /></FloatingActionButton>;
        
        
        const registrationBg = regValid?'#00BCD4':'pink';
        const clientProfileBg = clientProfileValid?'#00BCD4':'pink';
        
        let navs = [
            {index:0, label: 'Registration', path: 'registration', backgroundColor: registrationBg, disabled: false},
            {index:1, label: 'Client Profile', path: 'clientProfile', backgroundColor: clientProfileBg, disabled: disabledNavs},
            {index:2, label: 'Review', path: 'review', backgroundColor: '#00BCD4', disabled: disabledNavs},
        ];
        
        return <div>
        <Grid>
                <Row>
                    <Col xs={2}></Col>
                    <Col xs={8}>
                        <Tabs value={currentIndex}>
                            {
                                navs.map(nav => {
                                    return <Tab key={nav.index} value={nav.index} label={nav.label} onActive={() => this.handleActive(nav.path)} style={{backgroundColor: nav.backgroundColor}} disabled={nav.disabled} />                                    
                                })
                            }
                        </Tabs>
                    </Col>
                </Row>
                <Row>
                    <Col xs={1}></Col>
                    <Col xs={1} style={styles.chevron}>
                        {leftChevron}
                    </Col>
                    <Col xs={8}>
                        <Paper style={styles.panel} zDepth={1}>
                            <div style={styles.content}>
                            {this.props.children}
                            </div>
                        </Paper>
                    </Col>
                    <Col xs={1} style={styles.chevron}>
                        {rightChevron}
                    </Col>
                </Row>
                </Grid>
             </div>

    }
}

MyApp.contextTypes = {
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    data: state.data.toJS()
  };
}

export const MyAppContainer = connect(mapStateToProps)(MyApp);