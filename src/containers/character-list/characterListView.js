import React from 'react';
import { GridList, Card, CardHeader, GridListTile, CardMedia} from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';



const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        padding: 10
    },
    gridList: {
        width: '100$',
        height: '100%',
    },
    li: {
        height: 'inherit !important' 
    },
    card: {
        width: '100%'
    },
    media: {
        paddingTop: 300, 
    },
    button: {
        margin: theme.spacing.unit,
    },
});


const CharacterListView = (props) => {
    const {characters, classes, editChar, showDetail } = props;
    
    return (
        <div className={classes.root}>
            <GridList cellHeight={160} cols={5} className={classes.gridList}>
            {
                characters.length > 0 ? (
                    characters.map(character => 
                        
                            <GridListTile className={classes.li} key={character['id']}>
                                <Card className={classes.card}>
                                        <CardHeader
                                        title={character.name}
                                        />
                                        <CardMedia
                                        onClick={() => showDetail(character['id'])}
                                        className={classes.media}
                                        image={`${character['thumbnail']['path']}.${character['thumbnail']['extension']}`}
                                        />
                                         <Button onClick={() => editChar(character)} color="secondary" aria-label="Edit" className={classes.button}>
                                            Editar Personagem
                                        </Button>
                                </Card>
                            </GridListTile>                  
                    )
                ) : (
                   <p>CARREGANDO...</p>
                )
            }
            </GridList>                
            </div>
    )
}

CharacterListView.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CharacterListView);