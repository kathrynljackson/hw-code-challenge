import { render, screen } from '@testing-library/react';
import React from "react";
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import PremiumChart from './PremiumChart';


describe('PremiumChart', () => {
  
  test('should render PremiumChart component', () => {

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
      <PremiumChart premiums={mockData} />
    )

    expect(screen.getByText('Premium Range')).toBeInTheDocument()

  })
})