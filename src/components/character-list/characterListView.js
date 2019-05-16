import React from 'react';
import { List, Card, CardHeader, ListItem, CardMedia, CardActions, IconButton} from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';



const styles = theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    media: {
        // height: 0,
        paddingTop: 300, 
        width: 400
    },
});


const CharacterListView = (props) => {
    const {characters, classes } = props;

    console.info(props)
    
    return (
        <div className={classes.root}>
            {
                characters.length > 0 ? (
                    characters.map(character => 
                        <List key={character['id']}>
                            <ListItem>
                                <Card className={classes.card}>
                                        <CardHeader
                                        title={character.name}
                                        />
                                <Link to={`/character/${character['id']}`}>
                                        <CardMedia
                                        className={classes.media}
                                        image={`${character['thumbnail']['path']}.${character['thumbnail']['extension']}`}
                                        />
                                    </Link>
                                    <CardActions className={classes.actions} disableActionSpacing>
                                        <IconButton aria-label="Edit character">
                                           Editar
                                        </IconButton>
                                    </CardActions>
                                </Card>
                            </ListItem>
                        </List>                    
                    )
                ) : (
                   <p>Carregando...</p>
                )
            }                
            </div>
    )
}

CharacterListView.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CharacterListView);