import React, { Component } from 'react';
import { withStyles } from 'material-ui';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from 'material-ui/Modal';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormControlLabel } from 'material-ui/Form';
import styles from './styles';
import { doListRejects } from './reducer';

class DeclineModal extends Component {

  static propTypes = {
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    onOk: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    doListRejects: PropTypes.func.isRequired,
    list: PropTypes.array.isRequired,
  }

  state = {
    value: null,
  }

  componentDidMount() {
    this.props.doListRejects();
  }

  handleChange = (event, value) => {
    this.setState({ value });
  }

  handleDisabled = () => {
    return !(this.state.value);
  }

  handleOK = () => {
    this.props.onOk(this.props.list.find(r => r.name === this.state.value));
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
            Why don&#39;t you want this job?
          </Typography>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={this.state.value}
            onChange={this.handleChange}
          >
            {this.props.list.map((reject, index) => (
              <FormControlLabel value={reject.name} control={<Radio />} label={reject.label} key={index} />
          ))}
          </RadioGroup>
          <div className={classes.actions}>
            <Button classes={{ root: classes.modalButton }} onClick={this.handleOK} disabled={this.handleDisabled()}>OK</Button>
            <Button classes={{ root: classes.modalButton }} onClick={onClose} >Go Back</Button>
          </div>
        </div>
      </Modal>
    );
  }

}

const mapStateToProps = (state, ownProps) => ({
  list: state.reject.list,
  ...ownProps,
});

const mapDispatchToProps = dispatch => ({
  doListRejects: () => dispatch(doListRejects()),
});


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(DeclineModal));