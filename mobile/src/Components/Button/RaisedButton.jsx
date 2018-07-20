import React from 'react';
import { Button, withStyles } from 'material-ui';
import PropTypes from 'prop-types';
import styles from './styles';

const RaisedButton = ({
  type,
  label,
  onDisabled,
  onClick,
  classes,
}) => {
  return (
    <Button
      variant="raised"
      size="large"
      className={classes.button}
      disabled={onDisabled}
      classes={{ disabled: classes.disabled }}
      type={type}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

RaisedButton.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  classes: PropTypes.object.isRequired,
};

RaisedButton.defaultProps = {
  onDisabled: false,
  onClick: () => {},
};

export default withStyles(styles)(RaisedButton);