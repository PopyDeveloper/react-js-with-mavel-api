import React from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Row } from './styles';

const DetailsCharacterView = (props) => {
    const { details } = props;
    return (

        <Container>

            {
                details &&
                <>
                    <h3>Name: {details[0]['name']}</h3>
                    <h3>Descrição: {details[0]['description']}</h3>
                </>
            }
            {
                <Row>
                series && (
                    {/* series.length > 0 ? (
                            series.map(serie =>
                                <Column key={serie['id']}>

                                    <p>{serie.title}</p>
                                    <img src={`${serie['thumbnail']['path']}.${serie['thumbnail']['extension']}`}></img>
                            </Column>)
                        ) : (
                            <p className={classes.load}>CARREGANDO...</p>
                        ) */}
                )
                </Row>
                }
            }
        </Container>
    )
}

export default withRouter(DetailsCharacterView);