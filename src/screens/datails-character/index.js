import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { Container } from './styles';

import Serie from '../../components/serie';

import { getSeries } from '../../services/data/data.service';

const DetailsCharacter = () => {

    const [dataCharacter, setDataCharacter] = useState(null)
    const [series, setSeries] = useState(null)

    useEffect(() => {

        const loadData = () => {
            const dataStr = localStorage.getItem('charView');
            setDataCharacter(JSON.parse(dataStr));
        }

        loadData()
    }, [])

    useEffect(() => {

        const loadSeries = async (id) => {
            if(!id) return;

            await getSeries(id)
                .then(setSeries)
                .catch(err => console.error(err))

        }

        if(dataCharacter) {
            loadSeries(dataCharacter['id'])
        }
    }, [dataCharacter])





    return (
        <Container>
            {
                dataCharacter ? (
                    <>
                    <h3>Name: {dataCharacter['name']}</h3>
                    <h3>Descrição: {dataCharacter['description'] || 'not found'}</h3>
                    {
                        series &&
                            series.map(s => <Serie key={s['id']} data={s}/>)
                    }
                    </>
                ) : (
                    <h3>Loading...</h3>
                )
            }
        </Container>
    )
}


export default withRouter(DetailsCharacter);