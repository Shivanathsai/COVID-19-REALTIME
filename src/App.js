import React, { Component } from "react";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api/index";
import coronaImage from "./images/image.png";

class App extends Component {
  state = {
    data: {},
    country: ""
  };

  async componentDidMount() {
    const apiData = await new fetchData();
    this.setState({ data: apiData });
  }

  handleCountryChange = async country => {
    const apiData = await new fetchData(country);
    this.setState({ data: apiData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img src={coronaImage} alt="CoronaImage" className={styles.image} />
        <Cards realData={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
