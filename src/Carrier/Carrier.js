import React, { Component } from 'react';
import IndustryChart from '../charts/IndustryChart';
import PremiumChart from '../charts/PremuimChart';

class Carrier extends Component{
    constructor(props){
    super(props);
       this.state = {
        
       }
    }

    render() {
        return(
            <div>
                <IndustryChart industries={this.props.carrierSlice.industries}/>
                <PremiumChart premiums={this.props.carrierSlice.premiums}/>
            </div>
        )
    }
}

export default Carrier;