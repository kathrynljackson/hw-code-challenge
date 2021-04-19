import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import React from "react";
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

describe('App', () => {
  
  test('should render header', () => {
    let mockData= {
      "broker": {
      "description": "Enhanced background alliance",
      "name": "Glover-Greenholt"
    },
    "brokerSlice": {
      "brokerDivision": [
        {
          "premium": 348304933.12
        },
        {
          "premium": 198673593.88
        },
        {
          "premium": 93392311.01
        },
        {
          "premium": 23392311.01
        }
      ],
      "industries": [
        {
          "premium": 301881574.51,
          "proportion": 45.48,
          "title": "Mining"
        },
        {
          "premium": 220803111.74,
          "proportion": 33.27,
          "title": "Financial Services"
        },
        {
          "premium": 118627191.5,
          "proportion": 17.87,
          "title": "Technology"
        },
        {
          "premium": 22451271.27,
          "proportion": 3.38,
          "title": "Retail"
        }
      ],
      "premiumRange": [
        {
          "premium": 410881574.51,
          "proportion": 61.9,
          "title": "Over $50,000"
        },
        {
          "premium": 165940787.25,
          "proportion": 24.99,
          "title": "$10,000 - $50,000"
        },
        {
          "premium": 80940787.25,
          "proportion": 12.19,
          "title": "$1,000 - $10,000"
        },
        {
          "premium": 6000000.01,
          "proportion": 0.9,
          "title": "Under $1,000"
        }
      ],
      "products": [
        {
          "premium": 282431219.91,
          "proportion": 42.55,
          "title": "General Liability"
        },
        {
          "premium": 224484696,
          "proportion": 33.82,
          "title": "Commercial Property"
        },
        {
          "premium": 120207506.29,
          "proportion": 18.11,
          "title": "Workers Compensation"
        },
        {
          "premium": 36639725.82,
          "proportion": 5.52,
          "title": "Excess Liability"
        }
      ]
    },
    "carrier": {
      "name": "Barrows, Shanahan and Vandervort"
    },
    "carrierSlice": {
      "brokerDivision": [
        {
          "premium": 98485192,
          "proportion": 47.09,
          "title": "California"
        },
        {
          "premium": 76947176.83,
          "proportion": 36.79,
          "title": "New York"
        },
        {
          "premium": 23894092.21,
          "proportion": 11.42,
          "title": "Texas"
        },
        {
          "premium": 9837997.22,
          "proportion": 4.7,
          "title": "Illinois"
        }
      ],
      "industries": [
        {
          "premium": 107761528.89,
          "proportion": 51.52,
          "title": "Construction"
        },
        {
          "premium": 68940605.44,
          "proportion": 32.96,
          "title": "Financial Services"
        },
        {
          "premium": 16963237.56,
          "proportion": 8.11,
          "title": "Mining"
        },
        {
          "premium": 15478169.91,
          "proportion": 7.4,
          "title": "Retail"
        }
      ],
      "premiumRange": [
        {
          "premium": 147565525.3,
          "proportion": 70.55,
          "title": "$10,000 - $50,000"
        },
        {
          "premium": 24367659.39,
          "proportion": 11.65,
          "title": "Over $50,000"
        },
        {
          "premium": 31437418.08,
          "proportion": 15.03,
          "title": "Under $1,000"
        },
        {
          "premium": 5793855.49,
          "proportion": 2.77,
          "title": "$1,000 - $10,000"
        }
      ],
      "products": [
        {
          "premium": 77139852.21,
          "proportion": 36.88,
          "title": "Commercial Property"
        },
        {
          "premium": 45095857.2,
          "proportion": 21.56,
          "title": "Workers Compensation"
        },
        {
          "premium": 45095857.2,
          "proportion": 21.56,
          "title": "General Liability"
        },
        {
          "premium": 41832891.65,
          "proportion": 20,
          "title": "Excess Liability"
        }
      ]
    },
    "year": 2021
  }


    render(
      <App appData={mockData} />
    )

    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })
})


