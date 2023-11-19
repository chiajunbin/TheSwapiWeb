import React, { Component } from "react";
import axios from "axios";

const WithDataFetch = (WrappedComponent) => {
  class WithHOC extends Component {
    state = {
      data: [],
      loading: false,
      totalPage: 0,
    };

    getPlanetsList = (page) => {
      this.setState({ loading: true }, () => {
        axios
          .get(`https://swapi.dev/api/planets/?page=${page}`)
          .then((res) => {
            this.setState({
              data: res.data.results,
              totalPage: Math.ceil(res.data.count / 10),
            });
            this.setState({ loading: false });
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
            this.setState({ loading: false });
          });
      });
    };

    render = () => {
      return (
        <WrappedComponent
          data={this.state.data}
          totalPage={this.state.totalPage}
          getPlanetsList={this.getPlanetsList}
          loading={this.state.loading}
        />
      );
    };
  }

  return WithHOC;
};

export default WithDataFetch;
