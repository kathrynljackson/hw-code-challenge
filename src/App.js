import './App.css';
import React, { Component } from 'react';
import Carrier from './Carrier/Carrier';
import Broker from './Broker/Broker';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appData: {}
    }
  }

  componentDidMount() {
    /* THESE CONSOLE LOGS ARE FINE */
    // console.log('INITIAL STATE', this.state)
    // console.log('COMPONENT DID MOUNT')

    fetch('https://hw-fe-challenge-api.herokuapp.com/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: `
        query {
            mostRecentSnapshot {
                broker {
                    description,
                    name
                    }
                    brokerSlice {
                        brokerDivision {
                            premium
                        }
                        industries {
                            premium, 
                            proportion,
                            title
                        }
                        premiumRange {
                            premium, 
                            proportion,
                            title
                        }
                        products {
                            premium, 
                            proportion,
                            title
                        }
                    }
                    carrier {
                        name
                    }
                    carrierSlice {
                        brokerDivision {
                            premium, 
                            proportion,
                            title
                        }
                        industries {
                            premium, 
                            proportion,
                            title
                        }
                        premiumRange {
                            premium, 
                            proportion,
                            title
                        }
                        products {
                            premium, 
                            proportion,
                            title
                        }
                    }
                    year
                }
            }` 
        }),
    })
    .then(res => res.json())
    // .then(res => console.log('RESPONSE', res))
    // .then(res => console.log('DETAILED WANTED RESPONSE', res.data.mostRecentSnapshot))
    // .then(data => console.log('DATA', data))

    /*NOTE 
    - this FETCH method doesn't like console.logs and I need to figure out why that problem occurs now that I know wha the problem is. 
    - REFACTOR: put this method into a separate file for readability */
    .then(res => {
      this.setState({ appData: res.data.mostRecentSnapshot })
    })

    

  }


  render() {
    return(
      <div>
        <Broker />
        <Carrier />
      </div>
    )
  }
}

export default App;
