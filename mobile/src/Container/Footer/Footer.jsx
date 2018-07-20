import React from 'react';
import { withStyles } from 'material-ui';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import NotificationsIcon from 'material-ui-icons/Notifications';
import SearchIcon from 'material-ui-icons/Search';
import WorkIcon from 'material-ui-icons/Work';
import PropTypes from 'prop-types';
import styles from './styles';

const Footer = ({ classes }) => {
  return (
    <BottomNavigation showLabels className={classes.bottom} value={1}>
      <BottomNavigationAction label="Aufgaben" icon={<NotificationsIcon />} />
      <BottomNavigationAction label="Jobs entdecken" icon={<SearchIcon />} />
      <BottomNavigationAction label="Meine Jobs" icon={<WorkIcon />} />
    </BottomNavigation>
  );
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);