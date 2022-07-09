import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    webkitFlexDirection: 'revert',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    // display:'inline',
    display: 'flex',
    webkitFlexDirection: 'revert',
    flexDirection: 'row',
  },
  image: {
    marginLeft: '15px',
    display:'inline',
  },
}));