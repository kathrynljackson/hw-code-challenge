import { render, screen } from '@testing-library/react';
import IndustryChart from './IndustryChart';
import React from "react";
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';


describe('IndustryChart', () => {
  
  test('should render IndustryChart component', () => {

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
      <IndustryChart industries={mockData} />
    )

    expect(screen.getByText('Industries')).toBeInTheDocument()

  })
})