import React from 'react'

import './Loading.css'

const Loading = props => {
    const loadingClass = props.loadingFinished ? 'Loading finished' : 'Loading'
    return (
        <div className={loadingClass}>
            <div className='floater1' />
            <div className='waveContainer'>
                {
                    Array.from(Array(20).keys()).map(() => (
                        <svg viewBox='0 0 200 100'>
                            <path d='M 0 0  C 40 30, 60 30, 100 0' stroke='none' fill='#90DAB9' />
                            <path d='M 99 1 C 140 -30, 160 -30, 201 1' stroke='none'  fill='#619192' />
                        </svg>
                    ))
                }
            </div>
            <div className='floater2' />
            <div className='waveContainer2'>
                {
                    Array.from(Array(20).keys()).map(() => (
                        <svg viewBox='0 0 200 100'>
                            <path d='M -1 -1  C 40 30, 60 30, 101 -1' stroke='none' fill='#619192' />
                            <path d='M 100 0 C 140 -30, 160 -30, 200 0' stroke='none'  fill='#31476A' />
                        </svg>
                    ))
                }
            </div>
        </div>
    )
}

export default Loading
