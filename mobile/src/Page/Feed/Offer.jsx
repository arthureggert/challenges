import React, { Component } from 'react';
import { Divider, withStyles } from 'material-ui';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import ArrowBackIcon from 'material-ui-icons/ArrowBack';
import RaisedButton from './../../Components/Button/RaisedButton';
import icon from './assets/icon.png';
import styles from './styles';
import isRestricted from './../../Components/PrivateRoute/Restricted';
import Layout from './../../Container/Layout/Layout';
import { doGetOffer } from './reducer';
import { formatDate, formatTime } from './../../Components/API';

class Offer extends Component {

  static propTypes = {
    classes: PropTypes.object.isRequired,
    offer: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    doGetOffer: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.doGetOffer(this.props.match.params.id);
  }

  getTotalPricing = () => {
    const total = this.props.offer.pricingTables.reduce((sum, pricing) => {
      const value = Number(pricing.earningTotal.replace(' EUR', ''));
      return sum + value;
    }, 0);
    return `${total.toFixed(2)} EUR`;
  };

  getTotalTags = () => {
    const totalPricings = this.props.offer.pricingTables.filter(p => !p.unpaid);
    return `Gehalt, ${totalPricings.length} Tag gesamt`;
  };


  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    const { offer, classes } = this.props;
    return (
      <Layout>
        {offer.id ? (
          <Card key={offer.id} classes={{ root: classes.card }}>
            <div className={classes.cardHeader}>
              <ArrowBackIcon className={classes.arrowBack} onClick={this.goBack} />
              <img src={icon} alt="simple logo" className={classes.cardImage} />
              <Typography variant="button" gutterBottom classes={{ root: classes.general }}>
                {offer.jobCategoryKey}
              </Typography>
              <Typography variant="display1" component="h2" gutterBottom classes={{ root: classes.jobTitleOffer }}>
                {offer.title}
              </Typography>
            </div>
            <CardContent classes={{ root: classes.cardContent }} >
              <div className={classes.alertFrame}>
                <Typography variant="body1" component="span" gutterBottom classes={{ root: classes.status }}>
                  STATUS
                </Typography>
                <Typography variant="body1" component="span" gutterBottom classes={{ root: classes.statusText }}>
                  {offer.description}
                </Typography>
              </div>
              <div className={classes.priceFrame}>
                <Typography variant="display1" component="h3" classes={{ root: classes.totalPay }}>
                  {offer.earningTotal}
                </Typography>
                <Typography variant="caption" component="span" gutterBottom classes={{ root: classes.day }}>
                  Gehalt / {offer.earningHourly} pro Stunde
                </Typography>
              </div>
              <div className={classes.priceDetails}>
                <Typography variant="button" component="span" classes={{ root: classes.status }}>
                  gehalt details
                </Typography>
                {offer.pricingTables.map((price, index) => (
                  <div className={classes.priceDetailsRow} key={index}>
                    <Typography variant="caption" component="span" classes={{ root: classes.day }}>
                      {price.minutes / 60 } h {price.name}
                    </Typography>
                    <Typography variant="caption" component="span" classes={{ root: classes.day }}>
                      {price.earningTotal }
                    </Typography>
                  </div>
                 ))}
                <Divider className={classes.divider} />
                <div className={classes.priceDetailsRow}>
                  <Typography variant="caption" component="span" classes={{ root: classes.priceSumDeatil }}>
                    {this.getTotalTags()}
                  </Typography>
                  <Typography variant="caption" component="span" classes={{ root: classes.priceSumDeatil }}>
                    {this.getTotalPricing()}
                  </Typography>
                </div>
                <div className={classes.cardWhenDetail}>
                  <div className={classes.cardWhenDate}>
                    <Typography variant="button" component="span" gutterBottom classes={{ root: classes.time }}>
                          datum
                    </Typography>
                    {offer.shifts.map((shift, index) => (
                      <Typography
                        variant="button"
                        component="span"
                        gutterBottom
                        classes={{ root: classes.timeValue }}
                        key={index}
                      >
                        {formatDate(shift)}
                      </Typography>
                    ))}
                  </div>
                  <div className={classes.cardWhenTime}>
                    <Typography variant="button" component="span" gutterBottom classes={{ root: classes.time }}>
                          zeit
                    </Typography>
                    {offer.shifts.map((shift, index) => (
                      <Typography
                        variant="button"
                        component="span"
                        gutterBottom
                        classes={{ root: classes.timeValue }}
                        key={index}
                      >
                        {formatTime(shift)}
                      </Typography>
                    ))}
                  </div>
                </div>
                <div className={classes.topic}>
                  <Typography variant="button" component="span" classes={{ root: classes.status }}>
                    hinweis
                  </Typography>
                  {offer.breakTypes.map((_break, index) => (
                    <Typography
                      variant="body1"
                      component="span"
                      gutterBottom
                      classes={{ root: classes.statusText }}
                      key={index}
                    >
                      {_break.minutes} min {_break.description}
                    </Typography>
                  ))}
                </div>
                <div className={classes.topic}>
                  <Typography variant="button" component="span" classes={{ root: classes.status }}>
                    ort
                  </Typography>
                  <div className={classes.ortDescription}>
                    <div className={classes.locationDetail}>
                      <Typography variant="body1" component="span" gutterBottom classes={{ root: classes.statusText }}>
                        {offer.location.locationName} {offer.location.locationSearchString}
                      </Typography>
                    </div>
                    <div>
                      <RaisedButton type="button" label="maps" />
                    </div>
                  </div>
                </div>
                <div className={classes.topic}>
                  <Typography variant="button" component="span" classes={{ root: classes.status }}>
                    beschreibung
                  </Typography>
                  <Typography variant="body1" component="span" gutterBottom classes={{ root: classes.statusText }}>
                    {offer.description}
                  </Typography>
                </div>
                <div className={classes.alertFrame}>
                  <Typography variant="body1" component="span" gutterBottom classes={{ root: classes.statusAlert }}>
                    andforderrungen & hinweise
                  </Typography>
                  <ul>
                    <li>
                      <Typography variant="body1" component="span" gutterBottom classes={{ root: classes.statusText }}>
                        {offer.description}
                      </Typography>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardActions classes={{ root: classes.cardAction }}>
              <RaisedButton type="button" label="apply" />
            </CardActions>
          </Card>
        ) : (<div />)}
      </Layout>
    );
  }

}

const mapStateToProps = (state, ownProps) => ({
  offer: state.offer.offer,
  ...ownProps,
});

const mapDispatchToProps = dispatch => ({
  doGetOffer: id => dispatch(doGetOffer(id)),
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(isRestricted(Offer))));