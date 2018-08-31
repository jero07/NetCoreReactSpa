import React, {Component} from 'react';
import axios from 'axios';
class Main extends Component {
  constructor() {
    super();
    this.state = {
      weather: [],
      loading: true
    };
  }
  componentDidMount() {

    axios.get('api/SampleData/WeatherForecasts')
      .then(res => {
        this.setState({ weather: res.data, loading: false });
         console.log(res.data);
      });

    // fetch('api/SampleData/WeatherForecasts', {
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Accept': 'application/json'
    //     }
    //   })
    //   .then(response => response.json())
    //   .then(data => {
    //     this.setState({weather: data, loading: false});
    //     console.log(data);
    //   });
  }
  render() {
    let listItems = this.state.weather.map((we, index) =>
      <li key={index}>{we.summary}</li>
    );
    return (
      <React.Fragment>
        main
          <ul>
          {listItems}
         </ul>
      </React.Fragment>
    )
  }
}

export default Main;