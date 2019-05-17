import React from 'react';
import { List, Card, CardHeader, ListItem, CardMedia, CardActions, Fab, Icon} from '@material-ui/core';
import Edit from '@material-ui/icons/Edit';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';



const styles = theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    media: {
        paddingTop: 300, 
        width: 400
    },
    fab: {
        margin: theme.spacing.unit,
    },
});


const CharacterListView = (props) => {
    const {characters, classes, editFn, showDetail } = props;
    
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
                                        <CardMedia
                                        onClick={() => showDetail(character['id'])}
                                        className={classes.media}
                                        image={`${character['thumbnail']['path']}.${character['thumbnail']['extension']}`}
                                        />
                                    <CardActions className={classes.actions} disableActionSpacing>
                                    <Fab onClick={() => editFn(character)} color="secondary" aria-label="Edit" className={classes.fab}>
                                        <Icon><Edit></Edit></Icon>
                                    </Fab>
                                    </CardActions>
                                </Card>
                            </ListItem>
                        </List>                    
                    )
                ) : (
                   <p>CARREGANDO...</p>
                )
            }                
            </div>
    )
}

CharacterListView.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CharacterListView);