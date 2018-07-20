import React, { Component } from 'react';
import { withStyles } from 'material-ui';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import styles from './styles';
import isRestricted from './../../Components/PrivateRoute/Restricted';
import DeclineModal from './../../Components/DeclineModal/DeclineModal';
import CommentModal from './../../Components/CommentModal/CommentModal';
import { doListOffers } from './reducer';
import { doRejectOffer } from './../../Components/DeclineModal/reducer';
import FeedEmpty from './FeedEmpty';
import FeedWithValue from './FeedWithValue';

class Feed extends Component {

  static propTypes = {
    classes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    offers: PropTypes.array.isRequired,
    doListOffers: PropTypes.func.isRequired,
    doRejectOffer: PropTypes.func.isRequired,
  };

  state = {
    openDecline: false,
    openComment: false,
    declineReason: '',
    offerId: '',
  }

  componentDidMount() {
    this.props.doListOffers();
  }

  handleSelect = (offer) => {
    this.props.history.push(`/offer/${offer.id}`);
  }

  handleReject = (offer) => {
    this.setState((prevState) => {
      const state = { ...prevState };
      state.openDecline = true;
      state.offerId = offer.id;
      return state;
    });
  }

  handleOkDecline = (value) => {
    this.setState((prevState) => {
      const state = { ...prevState };
      state.openDecline = false;
      state.openComment = value.needsComment;
      state.declineReason = value.name;
      return state;
    });
    if (!value.needsComment) {
      this.props.doRejectOffer(this.state.offerId, { reason: value.name, reasonComment: '' });
      this.props.doListOffers();
    }
  }

  handleCloseDecline = () => {
    this.setState((prevState) => {
      const state = { ...prevState };
      state.openDecline = false;
      return state;
    });
  }

  handleOkComment = (value) => {
    this.setState((prevState) => {
      const state = { ...prevState };
      state.openComment = false;
      return state;
    });
    this.props.doRejectOffer(this.state.offerId, { reason: this.state.declineReason, reasonComment: value });
    this.props.doListOffers();
  }

  handleCloseComment = () => {
    this.setState((prevState) => {
      const state = { ...prevState };
      state.openComment = false;
      return state;
    });
  }

  render() {
    const { classes, offers } = this.props;
    const { openDecline, openComment } = this.state;
    return (
      <div>
        {offers && offers.length ?
          <FeedWithValue
            classes={classes}
            offers={offers}
            onSelect={this.handleSelect}
            onReject={this.handleReject}
          /> :
          <FeedEmpty classes={classes} />}
        <DeclineModal open={openDecline} onOk={this.handleOkDecline} onClose={this.handleCloseDecline} />
        <CommentModal open={openComment} onOk={this.handleOkComment} onClose={this.handleCloseComment} />
      </div>
    );
  }

}

const mapStateToProps = (state, ownProps) => ({
  offers: state.offer.offers,
  ...ownProps,
});

const mapDispatchToProps = dispatch => ({
  doListOffers: () => dispatch(doListOffers()),
  doRejectOffer: (id, reason) => dispatch(doRejectOffer(id, reason)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(isRestricted(Feed))));