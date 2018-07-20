import React from 'react';
import { withStyles } from 'material-ui';
import PropTypes from 'prop-types';
import styles from './styles';
import Footer from './../Footer/Footer';
import Header from './../Header/Header';
import Main from './../Main/Main';

const Layout = ({ classes, children }) => {
  return (
    <div className={classes.root}>
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]).isRequired,
};

export default withStyles(styles)(Layout);