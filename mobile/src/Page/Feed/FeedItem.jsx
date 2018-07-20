import React from 'react';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import FlatButton from './../../Components/Button/FlatButton';
import RaisedButton from './../../Components/Button/RaisedButton';
import icon from './assets/icon.png';
import location from './assets/location.png';
import { formatDate, formatTime } from './../../Components/API';

const FeedItem = ({
  classes,
  offer,
  onSelect,
  onReject,
}) => {

  const handleClick = () => {
    onSelect(offer);
  };

  const handleReject = () => {
    onReject(offer);
  };

  return (
    <Card key={offer.id} classes={{ root: classes.card }}>
      <div className={classes.cardHeader}>
        <img src={icon} alt="simple logo" className={classes.cardImage} />
        <Typography variant="button" gutterBottom classes={{ root: classes.general }}>
          {offer.jobCategoryKey}
        </Typography>
        <Typography variant="display1" component="h2" gutterBottom classes={{ root: classes.jobTitle }}>
          {offer.title}
        </Typography>
        <Typography variant="display1" component="h3" classes={{ root: classes.totalPay }}>
          {offer.earningTotal}
        </Typography>
        <Typography variant="caption" component="span" gutterBottom classes={{ root: classes.day }}>
          {offer.earningHourly} pro Stunde
        </Typography>
      </div>
      <CardContent classes={{ root: classes.cardContent }}>
        <div className={classes.cardLocation}>
          <img src={location} alt="location icon" />
          <Typography variant="caption" component="span" gutterBottom classes={{ root: classes.location }}>
            {offer.location.city} - {offer.location.district}
          </Typography>
        </div>
        <div className={classes.cardWhen}>
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
      </CardContent>
      <CardActions classes={{ root: classes.cardAction }}>
        <RaisedButton label="See Detail" type="button" onClick={handleClick} />
        <FlatButton label="Not Interested" type="button" onClick={handleReject} />
      </CardActions>
    </Card>
  );
};

FeedItem.propTypes = {
  classes: PropTypes.object.isRequired,
  offer: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired,
  onReject: PropTypes.func.isRequired,
};

export default FeedItem;