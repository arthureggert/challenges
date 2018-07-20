const styles = theme => ({
  body: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing.unit * 4,
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    color: theme.palette.secondary.dark,
    height: 'calc(100% - 144px)',
    overflow: 'scroll',
  },
});

export default styles;