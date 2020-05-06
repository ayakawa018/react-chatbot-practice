import React from "react";
import { makeStyles, createStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => (
  createStyles({
    "button": {
      backgroundColor: "#fff",
      borderColor: "#ffb549",
      color: "#ffb549",
      fontWeight: 600,
      marginBottom: "8px",
      transition: "backgroundcolor .3s , color .3s",
      "&:hover": {
        backgroundColor: "#ffb549",
        color: "#fff"
      }
    }
  })
));

const Answer = (props) => {
  const classes = useStyles();
  return (
    <Button className={classes.button} variant="outlined" onClick={() => props.select(props.content, props.nextId)}>
      {props.content}
    </Button>
  )
}

export default Answer;