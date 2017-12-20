import React, { Component } from "react";

class Amber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }
  componentDidMount() {
    fetch("https://api.punkapi.com/v2/beers?ebc_gt=20&ebc_lt=40").then(res => res.json()).then((result) => {
      this.setState({isLoaded: true, items: result});
    }, (error) => {
      this.setState({isLoaded: true, error});
    })
  }

  render() {
    const {error, isLoaded, items} = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div class="col s12 m7">

          {items.map(item => (
            <article key={item}>
              <h2 class="header">-{item.name}-</h2>

              <div class="card horizontal">

                <div class="card-image">
                  <img  src={item.image_url}/>
                </div>

                <div class="card-stacked">
                  <ul class="card-content">
                    <li>First brewed:</li>{item.first_brewed}
                    <li>Brewers tips:</li>{item.brewers_tips}
                    <li>Betterness:</li>{item.ibu}
                      <li>Alcool by volume:</li> {item.abv}
                    <li>Description:</li>{item.description}




                  </ul>
                </div>

              </div>

            </article>
          ))}

        </div>

      );
    }
  }
}

export default Amber;
