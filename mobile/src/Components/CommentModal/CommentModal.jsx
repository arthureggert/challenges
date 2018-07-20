import React, { Component } from 'react';
import { withStyles } from 'material-ui';
import PropTypes from 'prop-types';
import Modal from 'material-ui/Modal';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import styles from './styles';
import Input from './../Input/Input';

class CommentModal extends Component {

  static propTypes = {
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    onOk: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
  }

  state = {
    value: '',
  }

  handleChange = (event) => {
    const { id, value } = event.target;
    this.setState((prevState) => {
      const state = { ...prevState };
      state[id] = value;
      return state;
    });
  }

  handleDisabled = () => {
    return !(this.state.value);
  }

  handleOK = () => {
    this.props.onOk(this.state.value);
  }

  render() {
    const { classes, open, onClose } = this.props;
    return (
      <Modal
        open={open}
        onClose={onClose}
      >
        <div className={classes.modal}>
          <Typography variant="body1" gutterBottom classes={{ root: classes.modalBody }}>
            Please enter your reason
          </Typography>
          <Input
            id="value"
            label="Reason"
            fullWidth
            value={this.state.value}
            onChange={this.handleChange}
            type="text"
          />
          <div className={classes.actions}>
            <Button
              classes={{ root: classes.modalButton }}
              onClick={this.handleOK}
              disabled={this.handleDisabled()}
            >
              OK
            </Button>
          </div>
        </div>
      </Modal>
    );
  }

}

export default withStyles(styles)(CommentModal);