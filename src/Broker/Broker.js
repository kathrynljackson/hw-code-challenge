import React, { Component } from 'react';
import IndustryChart from '../charts/IndustryChart';
import PremiumChart from '../charts/PremuimChart';

class Broker extends Component{
    constructor(props){
    super(props);
       this.state = {
        
       }
    }

    // componentDidMount(){
    //     this.setState({ brokerData: this.props.broker,
    //     brokerSliceData: this.props.brokerSlice })
    // }

    

    render(){
        if(!this.props.brokerSlice){
            return(
                <h1>Loading Broker Data...</h1>
            )
        } else {
            return(
                <div>
                    <IndustryChart industries={this.props.brokerSlice.industries}/>
                    <PremiumChart premiums={this.props.brokerSlice.premiumRange}/>
                </div>
            )
        }
    }
}

export default Broker;