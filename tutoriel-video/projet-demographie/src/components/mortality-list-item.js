import React, {Component} from 'react'
import ReactChartkick, { ColumnChart } from 'react-chartkick'
import Chart from 'chart.js'
import Flag from './flag'

const xTitle = "Age"
const yTitle = "% Mortalité"

ReactChartkick.addAdapter(Chart)

class MortalityListItem extends Component {
    render(){
        return(
            <div>
                <Flag country="France" className="flag_medium"/>
                <ColumnChart xtitle={xTitle} ytitle={yTitle} data={[["12",13],["14",18],["39",45]]}/>
            </div>
        )
    }
}

export default MortalityListItem