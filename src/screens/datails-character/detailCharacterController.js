import React, {Component} from 'react'
import DetailsCharacterView from './detailsCharacterView';
import { getSeries, getDetailsCharacter } from '../../services/data/data.service';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class DetailsCharacterController extends Component {

    constructor(props) {
        super(props);

        console.info(this.props)
    }

    componentDidMount() {
        const { id } = this.props;
        this.loadSeries(id)
        this.loadDetailsPerson(id)
    }

    loadSeries = async (id) => {
        await getSeries(id).then(data => {
            this.setState({
                series: data
            })
        })
    }

    loadDetailsPerson = async (id) => {
        await getDetailsCharacter(id).then(data => {
            this.setState({
                details: data
            })
        })
    }

    render() {
        return <DetailsCharacterView {...this.state} />
    }
}

const mapStateToProps = state => ({
    id: state
});

export default withRouter(connect(mapStateToProps)(DetailsCharacterController));