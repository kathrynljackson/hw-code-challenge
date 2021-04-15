import React, { Component } from 'react';
import IndustryChart from '../charts/IndustryChart';
import PremiumChart from '../charts/PremuimChart';
import ProductsChart from '../charts/ProductsChart';

class Broker extends Component{
    constructor(props){
    super(props);
       this.state = {
        
       }
    }


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
                    <ProductsChart products={this.props.brokerSlice.products} />
                </div>
            )
        }
    }
}

export default Broker;