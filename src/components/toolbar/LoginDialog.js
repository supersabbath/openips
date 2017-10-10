
import React from 'react';
import Dialog from 'material-ui/Dialog';
import { orange500, blue500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

const styles = {
    container: {
        textAlign: 'center',
        paddingTop: 200,
    },
    errorStyle: {
        color: orange500,
      },
      underlineStyle: {
        borderColor: orange500,
      },
      floatingLabelStyle: {
        color: orange500,
      },
      floatingLabelFocusStyle: {
        color: blue500,
      }
};


const LoginDialog = (props) => {

        const actions = [
            <FlatButton
              label="Cancel"
              primary={true}
              onClick={props.handleClose}
            />,
            <FlatButton
              label="Submit"
              primary={true}
              keyboardFocused={true}
              onClick={props.handleLoginRequest}
            />,
          ];
    return (
        
        <div style={styles.container}>
            <Dialog
                title="Login"
                modal={true}
                open={props.open}
                actions={actions}
            >
                <TextField
                hintText="Introduzca su usuario"
                floatingLabelText="Usuario"
                hintStyle={styles.errorStyle}
              /><br />
              <TextField
                hintText="Introduzca su password"
                floatingLabelText="Password"
                type="password"
                hintStyle={styles.errorStyle}
              /><br />
            </Dialog>
        </div>
    );
}





export default LoginDialog


