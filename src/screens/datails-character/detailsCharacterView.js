import React from 'react';
import { GridList, ListSubheader, Card, CardHeader, CardMedia, GridListTile} from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
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
    titleCard: {
        backgroundColor: 'rgba(199,199,199,0.5)',
        
    },
    media: {
        paddingTop: 300, 
    },
    li: {
        height: 'inherit !important' 
        ,width: 'inherit !important'
    },
    load:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const DetailsCharacterView = (props) => {
    console.log(props, 'MY VIEW')
    const { series, classes, details } = props;
    return (
        
        <div className={classes.root}>
            {
                details &&
                <GridList cellHeight={160} className={classes.gridList}>
                    <GridListTile className={classes.titleGrid}>
                        <ListSubheader component="div">Name: {details[0]['name']}</ListSubheader>
                        <ListSubheader component="div">Descrição: {details[0]['description']}</ListSubheader>
                        
                    </GridListTile>
                </GridList>  

            }    
            {
                series &&
                    <GridList cellHeight={160} cols={4} className={classes.gridList}>
                        <GridListTile className={classes.titleGrid}>
                            <ListSubheader component="div">SERIES</ListSubheader>
                        </GridListTile>
                {   series.length > 0 ? (
                    series.map(serie => 
                        <GridListTile className={classes.li}  key={serie['id']}>

                                <Card className={classes.card}>
                                        <CardHeader
                                        title={serie.title}
                                        />
                                        <CardMedia
                                        className={classes.media}
                                        image={`${serie['thumbnail']['path']}.${serie['thumbnail']['extension']}`}
                                        />
                                </Card>
                    </GridListTile>)      
                    ) : (
                        <p className={classes.load}>CARREGANDO...</p>
                    )
                }
                </GridList>
            } 
        </div>
    )
}

DetailsCharacterView.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DetailsCharacterView);