const styles = theme => ({
  container: {
    display: 'flex',
    height: '100vh',
    background: '#93e7cf',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: theme.spacing.unit * 4,
  },
  form: {
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    paddingBottom: theme.spacing.unit * 15,
  },
  title: {
    fontSize: '1.5em',
    textTransform: 'uppercase',
  },
  modal: {
    position: 'absolute',
    width: '80%',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 3,
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  modalBody: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    fontSize: '1em !important',
  },
  modalButton: {
    marginLeft: '75%',
  },
  buttons: {
    marginTop: theme.spacing.unit * 2,
  },
});

export default styles;