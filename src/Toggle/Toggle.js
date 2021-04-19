import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './Toggle.css';

export default function Toggle(props){
    return(
        <div className='toggle-buttons'>
            <button className='premium-toggle button' >Premium Range</button>
            <button className='markets-toggle button'>Markets</button>
            <button className='industries-toggle button'>Industries</button>
            <button className='products-toggle button'>Products</button>
        </div>
    )
}