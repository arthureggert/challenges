import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from 'material-ui';
import Layout from './../../Container/Layout/Layout';
import background from './assets/background.png';

const FeedEmpty = ({ classes }) => {
  return (
    <Layout>
      <Typography variant="headline" className={classes.text}>
        Hab&#39;ein wenig Geduld.
      </Typography>
      <Typography variant="headline" className={classes.text}>
        Gerade sind für dich keine Jobs verfügbar.
      </Typography>
      <img src={background} alt="background" className={classes.image} />
    </Layout>
  );
};

FeedEmpty.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default FeedEmpty;