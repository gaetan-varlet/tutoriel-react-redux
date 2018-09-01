import React, {Component} from 'react'
import ReactChartkick, { ColumnChart } from 'react-chartkick'
import Chart from 'chart.js'
import Flag from './flag'

const xTitle = "Age"
const yTitle = "% Mortalité"

ReactChartkick.addAdapter(Chart)

class MortalityListItem extends Component {

    render(){
        const {mortality} = this.props
        const formatedDataMale = this.formatMortalityData(mortality.male)
        const formatedDataFemale = this.formatMortalityData(mortality.female)
        
        return(
            <tr>
                <td><Flag country={mortality.country} className="flag_medium"/></td>
                <td className="col-md-6"><ColumnChart xtitle={xTitle} ytitle={yTitle} data={formatedDataMale} max="30"/></td>
                <td className="col-md-6"><ColumnChart xtitle={xTitle} ytitle={yTitle}  data={formatedDataFemale} max="30"/></td>
            </tr>
        )
    }

    formatMortalityData(mortality){
        const array = mortality.map((data) => {
            return [Math.trunc(data.age).toString(), data.mortality_percent]
        })
        return array

    }
}

export default MortalityListItem