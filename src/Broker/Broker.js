import React, { Component } from 'react';
import IndustryChart from '../charts/IndustryChart';
import PremiumChart from '../charts/PremuimChart';

class Broker extends Component{
    constructor(props){
    super(props);
       this.state = {

       }
    }

    componentWillMount(){
        this.setState({
            broker: this.props.broker,
            brokerSlice: this.props.brokerSlice
        })
    }

    

    render(){
        return(
            <div>
                <IndustryChart industries={this.props.brokerSlice.industries}/>
                <PremiumChart premiums={this.props.brokerSlice.premiumRange}/>
            </div>
        )
    }
}

export default Broker;