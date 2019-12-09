import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import {fromJS, List} from 'immutable';
import CountryList from './CountryList';
import CountryForm from './CountryForm';
import CountryCountAndRegion from './CountryCountAndRegion';
import {fetchAPI} from "../helpers/api";

export default class Application extends PureComponent {


  constructor(props) {
    super(props);
    this.state = {
      initCountries: new List(),
      searchText: '',
      count: this.props.countryCount,
      regions: this.props.countryRegions,
    }
  }

  componentDidMount() {
    const token = document.querySelector('meta[name="csrf-token"]').content;
    fetch('countries',{
      method: 'GET',
      credentials: 'omit',
      mode: 'cors',
      headers:{
        "Content-Type": "application/json; charset=utf-8",
        "X-CSRF-TOKEN": token
      },
    })
      .then(res => res.json())
      .then(
        (data) => {
          this.setState({
            initCountries: fromJS(data)
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          return <p>{error}</p>;
        }
      )
  }

  setCountries = (data) => {
    this.setState({
      initCountries: data,
      count: data.size
    });
  }

  handleTextChange = e => {
    this.setState({
      searchText: e.target.value
    });
  }

  render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xs-12">
                      <CountryForm
                        handleTextChange={this.handleTextChange}
                        searchText={this.state.searchText}
                        setCountries={this.setCountries}
                      />
                      <CountryList list={this.state.initCountries} />
                      <CountryCountAndRegion regions={this.state.regions} count={this.state.count} />
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('app')) {
    const app = document.getElementById('app');
    const props = Object.assign({}, app.dataset)

    ReactDOM.render(<Application {...props}/>, app);
}
