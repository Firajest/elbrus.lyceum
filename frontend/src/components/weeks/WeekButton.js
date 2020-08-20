import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const WeekButton = withStyles((theme) => ({
  root: {
    backgroundColor: 'rgb(63,37,166)',
    color: 'rgb(133, 227,251)',
    borderRadius: '20px',
    margin: '5px',
    height: '85.3px',
    width: '350px',
    fontFamily: 'Rostin',
    fontSize: '18px',
    border: '5px solid rgb(63,37,166)',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '9%',
      width: '82%',
    },
    [theme.breakpoints.between('sm', 'm')]: {
      marginLeft: '9%',
      width: '350px',
    },
    '&:hover': {
      color: '#FFBC5B',
      backgroundColor: '#4520AB',
      border: '5px solid #FFBC5B'
    },
  },
}))(Button);

export default WeekButton;