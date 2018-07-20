import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui';
import styles from './styles';

const Main = ({ classes, children }) => {
  return (
    <main className={classes.body}>
      {children}
    </main>
  );
};

Main.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]).isRequired,
};

export default withStyles(styles)(Main);