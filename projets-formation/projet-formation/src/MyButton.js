import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

const MyButton = (props) => {
    return(
      <Button variant="contained" color={props.color}>
        {props.text}
      </Button>
    )
}

export default MyButton;
