import React from 'react';
import MenuIcon from 'material-ui-icons/Menu';
import { AppBar, IconButton, Toolbar, Typography, withStyles } from 'material-ui';
import PropTypes from 'prop-types';
import styles from './styles';

const Header = ({ classes }) => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <IconButton className={classes.menuButton} color="secondary" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="title" color="secondary" className={classes.flex}>
          Jobs Entdecken
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);