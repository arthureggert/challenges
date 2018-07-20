import Offer from './../../Page/Feed/Offer';
import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { createMuiTheme, MuiThemeProvider } from 'material-ui/styles';
import { Reboot } from 'material-ui';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Feed from '../../Page/Feed/Feed';
import Login from '../../Page/Login/Login';

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#3b5060',
      dark: '#9b9b9b',
      light: '#f8f8f8',
    },
    primary: {
      main: '#93e7cf',
      light: '#b8efe0',
    },
  },
});

class Application extends Component {

  static propTypes = {
    history: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
  };

  render() {

    const { store, history } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <Reboot />
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <Switch>
              <Route exact path="/" component={Feed} />
              <Route exact path="/offer/:id" component={Offer} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </ConnectedRouter>
        </Provider>
      </MuiThemeProvider>
    );

  }

}

const mapStateToProps = (state, ownProps) => ({ ...ownProps });
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Application);