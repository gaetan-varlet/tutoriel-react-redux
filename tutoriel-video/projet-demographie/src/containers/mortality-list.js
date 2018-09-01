import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import MortalityListItem from '../components/mortality-list-item';
import {getMortality} from '../actions/index'

class MortalityList extends Component {

    componentWillMount(){
        this.props.getMortality(this.props.defaultCountry)
    }

    renderMortalities(){
        return this.props.mortalities.map((data) => {
            return <MortalityListItem key={data.country} mortality={data}/>
        })
    }
    render(){
        return(
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Pays</th>
                            <th className="col-md-6">Hommes</th>
                            <th className="col-md-6">Femmes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderMortalities()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mortalities: state.mortality
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({getMortality},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MortalityList)