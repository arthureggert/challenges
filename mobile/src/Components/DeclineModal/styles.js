const styles = theme => ({
  modal: {
    position: 'absolute',
    width: '80%',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 3,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  modalBody: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    fontSize: '1em !important',
    fontWeight: 'bold',
  },
  modalButton: {
    color: '#009688',
  },
  buttons: {
    marginTop: theme.spacing.unit * 2,
  },
  actions: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start',
  },
});

export default styles;