import React from 'react';
import { Button, withStyles } from 'material-ui';
import PropTypes from 'prop-types';
import styles from './styles';

const FlatButton = ({
  type,
  label,
  onDisabled,
  onClick,
  classes,
}) => {
  return (
    <Button
      size="large"
      className={classes.flatButton}
      disabled={onDisabled}
      classes={{ disabled: classes.disabled }}
      type={type}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

FlatButton.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  classes: PropTypes.object.isRequired,
};

FlatButton.defaultProps = {
  onDisabled: false,
  onClick: () => {},
};

export default withStyles(styles)(FlatButton);