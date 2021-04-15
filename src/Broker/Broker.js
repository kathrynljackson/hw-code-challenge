import React, { Component } from 'react';
import IndustryChart from '../charts/IndustryChart';


class Broker extends Component{
    constructor(props){
    super(props);
       this.state ={

       }
        
    }



    render() {
        return(
            
            <div>
                <IndustryChart industries={this.props.brokerSlice.industries}/>
            </div>
        )
    }
}

export default Broker;