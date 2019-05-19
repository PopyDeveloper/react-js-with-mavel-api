import React from 'react';
import { GridList, Card, CardHeader, GridListTile, CardMedia, Button, ListSubheader} from '@material-ui/core';
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
    gridList: {
        width: '100$',
        height: '100%',
        marginTop: 20,
        display: 'flex',
        justifyContent: 'center'
    },
    titleGrid: {
        width: '100% !important',
        height: '100px !important',
        padding: '10px !important'
    },
    li: {
        height: 'inherit !important' 
        // ,width: 'inherit !important'
    },
    card: {
        margin: 10
    },
    titleCard: {
        backgroundColor: '#ee4540',
        color: '#2d142c'
    },
    media: {
        paddingTop: 300, 
    },
    button: {
        marginTop: 11,
        backgroundColor: '#355C7D',
        color: '#FFF',
        position: 'absolute',
        top: 0,
        lrft: 0
    },
});


const CharacterListView = (props) => {
    const {characters, classes, editChar, showDetail } = props;
    
    return (
        <div className={classes.root}>

        {
            characters.length > 0 &&

            <GridList cellHeight={160} cols={4} className={classes.gridList}>
            <GridListTile className={classes.titleGrid}>
                <ListSubheader component="div">PERSONAGENS</ListSubheader>
            </GridListTile>
            {
                characters.length > 0 ? (
                    characters.map(character => 
                        
                            <GridListTile className={classes.li} key={character['id']}>
                                <Card className={classes.card}>
                                <Button onClick={() => editChar(character)} color="secondary" aria-label="Edit" className={classes.button}>
                                    Editar
                                </Button>
                                        
                                        <CardMedia
                                        onClick={() => showDetail(character['id'])}
                                        className={classes.media}
                                        image={`${character['thumbnail']['path']}.${character['thumbnail']['extension']}`}>
                                        <CardHeader
                                        className={classes.titleCard}
                                        title={character.name}
                                        />
                                        </CardMedia>        
                                </Card>
                            </GridListTile> 
                                           
                    )
                ) : (
                   <p>CARREGANDO...</p>
                )
            }
            </GridList>   
        }
            </div>
    )
}

CharacterListView.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CharacterListView);