import Button from '@material-ui/core/Button';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const DayButton = withStyles((theme) => ({
  root: {
    backgroundColor: 'rgb(63,37,166)',
    color: 'rgb(133, 227,251)',
    borderRadius: '20px',
    margin: '5px',
    height: '85.3px',
    width: '450px',
    fontFamily: 'Rostin',
    fontSize: '18px',
    border: '5px solid rgb(63,37,166)',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '13%',
      width: '74%',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      marginLeft: '13%',
      width: '74%'
    },
    '&:hover': {
      color: '#FFBC5B',
      backgroundColor: '#4520AB',
      border: '3px solid #FFBC5B'
    },
  },
}))(Button);

export default DayButton;