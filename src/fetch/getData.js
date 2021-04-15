const getData = () => {fetch('https://hw-fe-challenge-api.herokuapp.com/graphql', {
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
.then(res => console.log(res))

}

export default getData;
