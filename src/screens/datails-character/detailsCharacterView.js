import React from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Row } from './styles';

import Serie from '../../components/serie'

const DetailsCharacterView = (props) => {
    const { data, series } = props;

    console.info(series)

    return(
        <Container>
            {
                data ? (
                    <>

                    <h3>Name: {data['name']}</h3>
                    <h3>Descrição: {data['description'] || 'not found'}</h3>

                    {
                        series &&
                            series.map(s =>
                                <>
                                    <Serie data={s} />
                                    <p key={s.id}>{s['title']}</p>
                                    <img key={`image_${s.id}`} src={`${s['thumbnail']['path']}.${s['thumbnail']['extension']}`}/>
                                </>
                            )
                    }
                    </>
                ) : (
                    <h3>Loading...</h3>
                )

            }
        </Container>
    )


}

export default withRouter(DetailsCharacterView);

// {
//     <Row>
//     series && (
//         {/* series.length > 0 ? (
//                 series.map(serie =>
//                     <Column key={serie['id']}>

//                         <p>{serie.title}</p>
//                         <img src={`${serie['thumbnail']['path']}.${serie['thumbnail']['extension']}`}></img>
//                 </Column>)
//             ) : (
//                 <p className={classes.load}>CARREGANDO...</p>
//             ) */}
//     )
//     </Row>
//     }