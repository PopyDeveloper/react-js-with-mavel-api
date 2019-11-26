import React, { useState, useEffect } from 'react'
import DetailsCharacterView from './detailsCharacterView';
import { getSeries, getDetailsCharacter } from '../../services/data/data.service';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const DetailsCharacterController = props => {

    console.info(props)
    const [id, setId] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        _setId(props)
        loadSeries(id)
        loadDetailsPerson(id)
    },[props, id])
    
    const _setId = props => setId(props['id'])

    const loadSeries = async (id) => {
        if(!id) return;

        await getSeries(id)
            .then(setData)
            .catch(err => console.error(err))
    }

    const loadDetailsPerson = async (id) => {
        if(!id) return;
        await getDetailsCharacter(id)
            .then(setData)
            .catch(err => console.error(err))
    }

        return <DetailsCharacterView data={data} />
}

const mapStateToProps = id => ({
    id
});

export default withRouter(connect(mapStateToProps)(DetailsCharacterController));