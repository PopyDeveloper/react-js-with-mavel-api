import React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { TextField, Avatar, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Save } from '@material-ui/icons'


const styles = theme => ({
  
  form: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 400,
    height: 400,
    marginBottom: 50
  },  
  input: {
    width: 500
  },
  button: {
    margin: theme.spacing.unit,
    background: 'orangered',
    color: 'white',
    width: 450
  },
  iconBig: {
    fontSize: 100,
  },
});

let EditCharacterFormView = props => {
    const { handlerName, handlerDescription, handleSubmit, classes  } = props

    return (
        <form className={classes.form} >

        <Avatar alt={props['name']} className={classes.avatar} src={props['image']} />
          

          <TextField
            id="standard-name"
            label="Nome"
            className={classes.input}
            value={props['name']}
            onChange={handlerName}
            margin="normal"
          />

          <TextField
            id="standard-multiline-static"
            label="Descrição"
            multiline
            rows="4"
            className={classes.input}
            value={props['description']}
            onChange={e => handlerDescription(e)}
            margin="normal"
          />

      <Button variant="contained" size="small" onClick={handleSubmit} className={classes.button}>
            <Save className={classNames(classes.leftIcon, classes.iconSmall)} />
            Save
      </Button>
        </form>
    )
}

EditCharacterFormView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EditCharacterFormView);