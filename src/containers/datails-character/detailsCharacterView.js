import React from 'react';
import { GridList, ListSubheader, Card, CardHeader, CardMedia, GridListTile} from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        width: '100%',
        // backgroundColor: theme.palette.background.paper,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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
});

const DetailsCharacterView = (props) => {
    console.log(props, 'MY VIEW')
    const { series, classes } = props;
    return (
        
        <div className={classes.root}>
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
                        <p>CARREGANDO...</p>
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