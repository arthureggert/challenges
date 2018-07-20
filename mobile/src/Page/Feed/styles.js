const styles = theme => ({
  text: {
    color: theme.palette.secondary.dark,
    textAlign: 'center',
  },
  image: {
    paddingTop: theme.spacing.unit * 10,
  },
  card: {
    width: '100%',
    marginBottom: theme.spacing.unit * 2,
  },
  cardHeader: {
    width: '100%',
    backgroundImage: 'linear-gradient(to left, #fdb49e, #ff8d6b)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  cardImage: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
  },
  general: {
    color: '#3a5061',
    fontSize: '12px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '0.83',
    letterSpacing: 'normal',
    textAlign: 'center',
  },
  jobTitleOffer: {
    color: '#fff',
    fontSize: '30px',
    fontWeight: '500',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit * 3,
  },
  jobTitle: {
    color: '#fff',
    fontSize: '30px',
    fontWeight: '500',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
    paddingTop: theme.spacing.unit,
  },
  totalPay: {
    fontSize: '55px',
    fontWeight: '300',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: '#3b5060',
  },
  day: {
    fontSize: '14px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.36',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: '#3b5060',
    paddingBottom: theme.spacing.unit,
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingTop: theme.spacing.unit,
    paddingBottom: 0,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
  },
  location: {
    fontSize: '14px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '0.71',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#3b5060',
    marginLeft: theme.spacing.unit,
  },
  cardLocation: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: theme.spacing.unit * 3,
  },
  cardWhen: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  cardWhenDate: {
    display: 'flex',
    flexDirection: 'column',
  },
  cardWhenTime: {
    display: 'flex',
    flexDirection: 'column',
  },
  time: {
    color: '#9b9b9b',
    fontSize: '14px',
    lineHeight: '10px',
    letterSpacing: '0.5px',
  },
  timeValue: {
    fontSize: '18px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.78',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#3b5060',
  },
  cardAction: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    height: 'inherit ! important',
    paddingBottom: theme.spacing.unit * 2,
  },
  arrowBack: {
    alignSelf: 'flex-start',
    color: 'white',
    marginLeft: theme.spacing.unit,
    marginTop: theme.spacing.unit,
  },
  alertFrame: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #ff8d6b',
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit,
    paddingLeft: theme.spacing.unit,
    width: '100%',
  },
  status: {
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '0.71',
    letterSpacing: '0.5px',
    textAlign: 'left',
    color: '#979797',
    paddingBottom: theme.spacing.unit * 2,
  },
  statusText: {
    fonstSize: '14px',
    color: '#3b5060',
    textAlign: 'left',
    lineHeight: '19px',
  },
  priceFrame: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  priceDetails: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: theme.spacing.unit * 2,
  },
  priceDetailsRow: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  divider: {
    width: '100%',
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit / 2,
  },
  priceSumDeatil: {
    color: '#3b5060',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '19px',
  },
  cardWhenDetail: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: theme.spacing.unit * 5,
    border: '1px solid #cfd0d1',
    paddingTop: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
  },
  topic: {
    width: '100%',
    marginTop: theme.spacing.unit * 5,
    display: 'flex',
    flexDirection: 'column',
  },
  ortDescription: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  locationDetail: {
    width: '50%',
  },
  statusAlert: {
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '0.71',
    letterSpacing: '0.5px',
    textAlign: 'left',
    color: '#ff8d6b',
    fontSize: '14px',
    textTransform: 'uppercase',
    paddingBottom: theme.spacing.unit * 2,
  },
});

export default styles;