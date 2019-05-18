import React from 'react';
import { List, ListItem, Card, CardHeader, CardMedia} from '@material-ui/core';
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
        height: 0,
        paddingTop: 300, 
        width: '100%'
    },
});

const DetailsCharacterView = (props) => {
    console.log(props, 'MY VIEW')
    const { series, classes } = props;
    return (
        
        <div className={classes.root}>
            {
                series ? (
                    series.map(serie => 
                        <List key={serie['name']}>
                            <ListItem >

                                <Card className={classes.card}>
                                        <CardHeader
                                        title={serie.title}
                                        />
                                        <CardMedia
                                        className={classes.media}
                                        image={`${serie['thumbnail']['path']}.${serie['thumbnail']['extension']}`}
                                        />
                                </Card>
                               
                            </ListItem> 
                        </List> 
                    )
                ) : (
                    <p>CARREGANDO...</p>
                )
                
                                       
                
        }
        </div>
    );
}

DetailsCharacterView.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DetailsCharacterView);