import React, {Component} from 'react'
import DetailsCharacterView from './detailsCharacterView';
import { getSeries } from '../../services/data/data.service';
import { connect } from 'react-redux'

class DetailsCharacterController extends Component {

    constructor(props) {
        super(props);

        console.info(this.props)
    }

    componentDidMount() {
        const { id } = this.props;
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

const mapStateToProps = state => ({
    id: state
});

export default connect(mapStateToProps)(DetailsCharacterController);