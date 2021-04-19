import { render, screen } from '@testing-library/react';
import React from "react";
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import MarketChart from './MarketChart';


describe('MarketChart', () => {
  
  test('should render MarketChart component', () => {

    let mockData = [
        { 
            premium: 1,
            proportion: 1.1,
            title: 'title1',
            
        },
        {
            premium: 2,
            proportion: 2.2,
            title: 'title2',
        }
    ]

    render(
      <MarketChart brokerDivision={mockData} />
    )

    expect(screen.getByText('Market')).toBeInTheDocument()

  })
})