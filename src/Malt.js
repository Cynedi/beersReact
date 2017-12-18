import React, { Component } from "react";

class Malt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        beers:[],
      }
    }
    componentDidMount() {
        fetch("https://api.punkapi.com/v2/beers")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }



  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (

        <ul>
          {items.map(item => (
            <li key={item}>
              {item.name} degré => {item.abv}
            </li>
          ))}
        </ul>

      );
    }
  }
}



export default Malt;
