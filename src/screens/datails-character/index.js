import React, { useState, useEffect } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { Container, ContainerLoading } from './styles';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import Serie from '../../components/serie';
import { getSeries } from '../../services/data/data.service';

const Detailschar = () => {

    const { char } = useSelector(
        state => ({ char: state })
    );

    const [series, setSeries] = useState(null)

    useEffect(() => {
        const loadSeries = async (id) => {
            if(!id) return;
            await getSeries(id)
                .then(setSeries)
                .catch(err => console.error(err))
        }
        if(char) {
            loadSeries(char['id'])
        }
    }, [char])

    return (
        <Container>
            {
                char.length < 1 && <Redirect to='/' />
            }
            {
                char ? (
                    <>
                    <h3>Name: {char['name']}</h3>
                    <h3>Descrição: {char['description'] || 'not found'}</h3>
                    {
                        series &&
                            series.map(s => <Serie key={s['id']} data={s}/>)
                    }
                    </>
                ) : (

                    <ContainerLoading>
                        <CircularProgress />
                    </ContainerLoading>
                )
            }
        </Container>
    )
}


export default withRouter(Detailschar);