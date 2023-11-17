import React, { Component } from 'react';
import axios from 'axios';


const WithDataFetch = (WrappedComponent) => {

    class WithHOC extends Component {
    
    state = {
        data: [],
        loading: true
    }

    getPeopleList = () => {
      axios.get('https://swapi.dev/api/people/')
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
                <WrappedComponent data={this.state.data} getPeopleList = {this.getPeopleList} loading = {this.state.loading}/>
            );
        }
    }

    return WithHOC;
}


export default WithDataFetch;
