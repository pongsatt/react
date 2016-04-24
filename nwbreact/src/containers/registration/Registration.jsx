import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import Panel from '../../components/panel/Panel';
import Form from '../../components/form/Form';
import Input from '../../components/form/Input';

import {setFormValue, setFormValid} from '../../actions/formActions';

import { Page } from "../../decorators/Page";

import './registration.css';

@Page
class Registration extends Component{
    static contextTypes = {
        router: React.PropTypes.object.isRequired
    }
    
    render() {
        const {form} = this.props;
        
        return (
            <Panel>
                <Form>
                    <Input name='email' label='Email' value={form.email} require={true}/>
                    <Input name='phone' label='Phone' value={form.phone} require={form.email}/>
                </Form>
        </Panel>
        );
    }
    
    componentDidMount() {
        const { route } = this.props
        const { router } = this.context
        router.setRouteLeaveHook(route, this.routerWillLeave.bind(this))
    }
    
    routerWillLeave(){
        const {isValid} = this.props;
        
        return this.props.isValid();
    }
    
}

const mapStateToProps = (state) => {
  return {
    form: state.form
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (name, value) => {
      dispatch(setFormValue(name, value))
    },
    onValidate: (path, valid) => {
      dispatch(setFormValid(path, valid))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Registration)