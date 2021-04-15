import React, { Component } from 'react';
import IndustryChart from '../charts/IndustryChart';
import PremiumChart from '../charts/PremuimChart';

class Carrier extends Component{
    constructor(props){
    super(props);
       this.state = {
        
       }
    }


    render(){
        if(!this.props.carrierSlice){
            return(
                <h1>Loading Carrier Data...</h1>
            )
        } else {
            return(
                <div>
                    <IndustryChart industries={this.props.carrierSlice.industries}/>
                    <PremiumChart premiums={this.props.carrierSlice.premiumRange}/>
                </div>
            )
        }
    }
}

export default Carrier;