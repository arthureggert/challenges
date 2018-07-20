import React, { Component } from 'react';
import { Button, Divider, Modal, Typography, withStyles } from 'material-ui';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from '../../Components/Input/Input';
import RaisedButton from '../../Components/Button/RaisedButton';
import styles from './styles';
import logo from './assets/logo.png';
import { doLogin, doLoginReset } from './reducer';

class Login extends Component {

  static propTypes = {
    classes: PropTypes.object.isRequired,
    error: PropTypes.bool,
    doLogin: PropTypes.func.isRequired,
    doLoginReset: PropTypes.func.isRequired,
  };

  static defaultProps = {
    error: false,
  }

  state = {
    email: '',
    password: '',
  };

  handleClose = () => {
    this.props.doLoginReset();
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.doLogin(this.state.email, this.state.password);
  };

  handleDisabled = () => {
    const { email, password } = this.state;
    return !(email && password);
  };

  handleChange = (event) => {
    const { id, value } = event.target;
    this.setState((prevState) => {
      const state = { ...prevState };
      state[id] = value;
      return state;
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Typography variant="display1" color="inherit" gutterBottom classes={{ root: classes.title }}>
            login
        </Typography>
        <form noValidate autoComplete="off" className={classes.form} onSubmit={this.handleSubmit}>
          <Input
            id="email"
            label="Email"
            fullWidth
            value={this.state.email}
            onChange={this.handleChange}
            type="email"
          />
          <Input
            id="password"
            label="Passwort"
            fullWidth
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
          />
          <div className={classes.buttons}>
            <RaisedButton onDisabled={this.handleDisabled()} label="login" type="submit" />
          </div>
        </form>
        <img src={logo} alt="zenjob logo" />
        <Modal open={this.props.error} onClose={this.handleClose}>
          <div className={classes.modal}>
            <Typography variant="display1" color="inherit" gutterBottom classes={{ root: classes.title }}>
                fehler
            </Typography>
            <Divider />
            <Typography variant="body1" gutterBottom classes={{ root: classes.modalBody }}>
                Oops, es ist ein Fehler afgetreten. Überprüfe Email und Passwort
            </Typography>
            <Button classes={{ root: classes.modalButton }} onClick={this.handleClose}>OK</Button>
          </div>
        </Modal>
      </div>
    );
  }

}

const mapStateToProps = (state, ownProps) => ({
  error: state.auth.error,
  ...ownProps,
});

const mapDispatchToProps = dispatch => ({
  doLogin: (usernname, password) => dispatch(doLogin(usernname, password)),
  doLoginReset: () => dispatch(doLoginReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Login));