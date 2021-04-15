import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

/* 
- the newest version of chart.js DOES NOT work will with react 
-versions to use:
   -chart.js: "^2.9.4"
   -react-chartjs-s: "^2.11.1" 
*/ 



class IndustryChart extends Component{
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
                        labels: this.props.industries.map(i => {
                            return i.title
                        }),
                        datasets: [{
                            label: 'Industries',
                            data: [300, 50, 100],
                            backgroundColor: [
                            'rgb(255, 99, 132)',
                            'rgb(54, 162, 235)',
                            'rgb(255, 205, 86)'
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

export default IndustryChart;