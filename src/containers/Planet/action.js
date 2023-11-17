import React, { Component } from 'react';
import axios from 'axios';


const WithDataFetch = (WrappedComponent) => {

    class WithHOC extends Component {
    
    state = {
        data: [],
        loading: true
    }

    getPlanetsList = () => {
      axios.get('https://swapi.dev/api/planets/')
        .then(res => {
          this.setState({data: res.data.results});
          console.log(res.data);
          this.setState({loading: false})
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          this.setState({loading: false})
        });
    }

        render = () => {
            return (
                <WrappedComponent data={this.state.data} getPlanetsList = {this.getPlanetsList} loading = {this.state.loading}/>
            );
        }
    }

    return WithHOC;
}


export default WithDataFetch;
