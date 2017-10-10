import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../../actions/authentication'
import { bindActionCreators } from 'redux';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import LoginDialog from './LoginDialog'

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

class Login extends Component {
  static muiName = 'FlatButton';
  constructor(props, context) {
    super(props, context);
  }


  render() {  
    const shouldShowDialog = this.props.shouldShowDialogView;
    if ( this.props.state === 'NOT_LOGED_IN') {
      return (
        <div>
         
          <RaisedButton label="Login" onClick={this.props.actions.showLoginDialog } />
          { shouldShowDialog === true && 
            <LoginDialog open={shouldShowDialog} handleClose={this.handleClose} handleLoginRequest={this.handleLoginRequest} /> 
          }
          
        </div>
      );
    } else {
      return ( <Logged />);
    }
  }
}
// <NavigationExpandMoreIcon />

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);

Logged.muiName = 'IconMenu';

const mapStateToProps = (state, ownProps) => { // from the reducer : state = { authenticate , dialogState }
  return {
    user: state.authenticate.user,
    state: state.authenticate.state,
    shouldShowDialogView: state.dialogState.shouldShowDialog
  }
}

const mapDispatchToProps = (dispatch, ownProps) => { 

  return { actions: bindActionCreators(actions,dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

