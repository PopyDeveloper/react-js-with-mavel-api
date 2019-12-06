import React, {
    useState,
    useEffect
} from 'react'
import DetailsCharacterView from './detailsCharacterView';
import {
    connect
} from 'react-redux'
import {
    withRouter
} from 'react-router-dom'

import { getSeries } from '../../services/data/data.service';

const DetailsCharacterController = () => {

    const [dataCharacter, setDataCharacter] = useState(null)
    const [series, setSeries] = useState(null)

    useEffect(() => {
        loadData()
    }, [])

    useEffect(() => {
        if(dataCharacter) {
            loadSeries(dataCharacter['id'])
        }
    }, [dataCharacter])

    const loadData = () => {
        const dataStr = localStorage.getItem('charView');
        setDataCharacter(JSON.parse(dataStr));
    }

    const loadSeries = async (id) => {
        if(!id) return;

        await getSeries(id)
            .then(setSeries)
            .catch(err => console.error(err))
    }

    return <DetailsCharacterView data={dataCharacter} series={series} />
}


export default withRouter(connect()(DetailsCharacterController));