import React from 'react'

import './Position.css'
import ZingChart from 'zingchart-react'

const Position = props => {
    const { title, value, amount, singleValue, color, timeSeries } = props.stock
    return (
        <div className='Position'>
            <h3 style={{color: color}}>{title}</h3>
            <h4>{value}€ </h4>
            <p>{amount} x {singleValue}€</p>
            <div className='PositionPlot'>
                <ZingChart data={{
                    type: 'area',
                    series: [{
                        values: timeSeries,
                        'line-color': color,
                        'background-color': color
                    }],
                    stacked: true,
                    plot: {
                        marker: {
                            "visible": false
                        }
                    },
                    'scale-x': {
                        'visible': false
                    },
                    'scale-y': {
                        'visible': false
                    },
                    height: '170px',
                    'background-color': '#f5f8fa'
                }}/>
            </div>
        </div>
    )
}

export default Position
