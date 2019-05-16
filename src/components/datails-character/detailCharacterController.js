import React, {Component} from 'react'
import DetailsCharacterView from './detailsCharacterView';
import { getSeries } from '../../services/data/data.service';

class DetailsCharacterController extends Component {

    constructor(props) {
        super(props);

        this.state = {
            series: []
        };
    }

    componentDidMount() {
        const id = Number(this.props['match']['params']['id'])
        this.loadSeries(id)
    }

     loadSeries = async (id) => {
        await getSeries(id).then(data => {
            this.setState({
                series: data
            })
        })
    }

    render() {
        return <DetailsCharacterView {...this.state} />
    }
}

export default DetailsCharacterController;