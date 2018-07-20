import React from 'react';
import PropTypes from 'prop-types';
import Layout from './../../Container/Layout/Layout';
import FeedItem from './FeedItem';

const FeedWithValue = ({
  classes,
  offers,
  onSelect,
  onReject,
}) => {
  return (
    <Layout>
      {offers.map(offer => (
        <FeedItem
          classes={classes}
          offer={offer}
          key={offer.id}
          onSelect={onSelect}
          onReject={onReject}
        />
      ))}
    </Layout>
  );
};

FeedWithValue.propTypes = {
  classes: PropTypes.object.isRequired,
  offers: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  onReject: PropTypes.func.isRequired,
};

export default FeedWithValue;