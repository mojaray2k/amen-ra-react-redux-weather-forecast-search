import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index.js';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: '' };
  }

  onInputChange = (event) => {
    this.setState({
       term: event.target.value
    });
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    // we need to go and fetch weather data
    this.props.fetchWeather(this.state.term);
    this.setState({
       term: ''
    });
  }

  render() {
     return (
        <form onSubmit={this.onFormSubmit} className="input-group">
          <input 
            placeholder="Get a five-day forecast in your favorite cities"
            className="form-control"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Submit</button>
          </span>
        </form>
     )
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

// Passing null in the connect method is just telling redux this container 
// is not maintaining state. 
export default connect(null, mapDispatchToProps)(SearchBar);
