import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

const isRestricted = (ComponentToRestrict) => {
  class ComponentRestricted extends React.Component {

    static propTypes = {
      logged: PropTypes.bool.isRequired,
      history: PropTypes.object.isRequired,
    }

    componentWillMount() {
      this.check();
    }

    check = () => {
      if (!this.props.logged) {
        this.props.history.replace({ pathname: '/login' });
      }
    }

    render() {
      return <ComponentToRestrict {...this.props} />;
    }

  }

  const mapStateToProps = (state, ownProps) => ({
    logged: !!(state.auth.token),
    ...ownProps,
  });

  return connect(mapStateToProps)(ComponentRestricted);
};

export default isRestricted;