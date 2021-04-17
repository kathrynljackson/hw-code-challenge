import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import './charts.css';

/* 
- the newest version of chart.js DOES NOT work will with react 
-versions to use:
   -chart.js: "^2.9.4"
   -react-chartjs-s: "^2.11.1" 
*/ 



export default function MarketChart(props){
        return (
            <div className='chart market-chart'>
                <h2 className='title'>Market</h2>
                <Doughnut
                    data={{ 
                        labels: props.brokerDivision.map(m => {
                            return m.title
                        }),
                        datasets: [{
                            label: 'Industries',
                            data: props.brokerDivision.map(m => {
                                return m.premium
                            }),
                            backgroundColor: [
                            'rgb(2,61,64)',
                            'rgb(1,101,103)',
                            'rgb(1,143,145)',
                            'rgb(0,175,177)',
                            'rgb(8,199,176)',
                            'rgb(0,234,203)',
                            'rgb(62,167,23)',
                            'rgb(0,206,95)',
                            'rgb(0,232,50)',
                            'rgb(0,255,56)',
                            ],
                            hoverOffset: 4,
                        }] 
                    }}
                    height={400}
                    width={600}
                    />
            </div>
        )
    }