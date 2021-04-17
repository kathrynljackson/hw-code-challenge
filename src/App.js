import './App.css';
import React, { Component } from 'react';
import Carrier from './Carrier/Carrier';
import Broker from './Broker/Broker';
import Toggle from './Toggle/Toggle';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appData: {}
    }
  }

  async componentDidMount() {
    /* THESE CONSOLE LOGS ARE FINE */
    // console.log('INITIAL STATE', this.state)
    // console.log('COMPONENT DID MOUNT')

    let fetchNow = await fetch('https://hw-fe-challenge-api.herokuapp.com/graphql', {
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

    return fetchNow
    

  }

 render(){
   
   if(!this.state.appData.broker) {
     return (
       <h1>Loading...</h1>
     )
   } else {
      return(
        <div className='app'>
          <header className='header'>
            <h1>{this.state.appData.broker.name}</h1>
            <div className='header-info'>
              <a className='title'>Company:</a>
              <a>{this.state.appData.broker.name}</a>
              <a className='title'>Summary:</a>
              <a>{this.state.appData.broker.description}</a>
            </div>
          </header>
          <div className='toggle-buttons'>
            <Toggle />
          </div>
          <main className='shown-data'>
            <Broker broker={this.state.appData.broker} brokerSlice={this.state.appData.brokerSlice}/>
            <Carrier carrier={this.state.appData.carrier} carrierSlice={this.state.appData.carrierSlice}/>
          </main>
        </div>
      )
    }
  }
}

export default App;
