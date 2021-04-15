import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

/* 
- the newest version of chart.js DOES NOT work will with react 
-versions to use:
   -chart.js: "^2.9.4"
   -react-chartjs-s: "^2.11.1" 
*/ 

class PremiumChart extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

   render(){ 
        return (
            <div>
                <Doughnut
                    data={{ 
                        labels: this.props.premiums.map(i => {
                            return i.title
                        }),
                        datasets: [{
                            label: 'Premiums',
                            data: this.props.premiums.map(p => {
                                return p.premium
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
                            hoverOffset: 4
                        }] 
                    }}
                    height={400}
                    width={600}
                    />
            </div>
        )
    }
}

export default PremiumChart;