import React, { Component } from 'react'
import { PieChart } from 'react-minimal-pie-chart'
import ZingChart from 'zingchart-react'
import './Overview.css'
import Position from './Position'
import Loading from './Loading'
import { getFormattedData, getFormattedCryptoData, exampleFinData, exampleCryptoData } from './utils'


class Overview extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            finData: null
        }
    }

    componentDidMount() {
        Promise.all([
            fetch('https://sebastian-vogt.dev/financeapi/data'),
            fetch('https://sebastian-vogt.dev/financeapi/crypto')
        ])
            .then(res => {
                return Promise.all([res[0].json(), res[1].json()])
            })
            .then((assetData) => {
                this.setState({
                    isLoaded: true,
                    finData: assetData[0],
                    cryptoData: assetData[1]
                })
            }, (error) => {
                console.log(error)
                this.setState({
                    isLoaded: true,
                    finData: exampleFinData,
                    cryptoData: exampleCryptoData
                })
            })
    }

    render() {
        const { error, isLoaded, finData, cryptoData } = this.state
        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div className='Overview'>
                <Loading />
            </div>
        } else {
            const { currentPortValue, pieData, stockData, approachingData } = getFormattedData(finData)
            const { currentCryptoValue, cryptoPieData } = getFormattedCryptoData(cryptoData)

            return (
                <div className='Overview'>
                    <Loading loadingFinished />
                    <div className='PieChart'>
                        <PieChart
                            rounded animate paddingAngle={10} lineWidth={10} data={pieData} startAngle={275}
                        />
                        <h2>{currentPortValue}€</h2>
                        <PieChart className="CryptoPieChart"
                            rounded animate paddingAngle={10} lineWidth={5} data={cryptoPieData} startAngle={275}
                            label={({ dataEntry }) => dataEntry.title} labelPosition={90}
                        />
                        <h3 className="CryptoPortfolioValue">{currentCryptoValue}€</h3>
                    </div>
                    <div className='OverviewPlot'>
                        <ZingChart data={{
                            type: 'area',
                            series: stockData.map(stock => ({
                                values: stock.timeSeries,
                                'line-color': stock.color,
                                'background-color': stock.color
                            })),
                            stacked: true,
                            plot: {
                                marker: {
                                    'visible': false
                                }
                            },
                            'scale-x': {
                                'visible': false
                            },
                            'scale-y': {
                                'visible': false
                            },
                            height: '300px',
                            'background-color': '#f5f8fa'
                        }}/>
                    </div>
                    <div className='Stocks'>
                        {stockData.map(stock => <Position stock={stock} />)}
                    </div>
                    <div className='Approaching'>
                        <div className='PieChart'>
                            <PieChart
                                rounded animate paddingAngle={10} lineWidth={10} data={approachingData} startAngle={275}
                            />
                            <h2>Approaching</h2>
                        </div>
                        <ul>
                            {approachingData.map(stock => <li style={{color: stock.color}}>{stock.title}</li>)}
                        </ul>
                    </div>
                </div>
            )
        }
    }
}

export default Overview


