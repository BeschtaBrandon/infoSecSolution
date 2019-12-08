import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import {fromJS, List} from 'immutable';
import CountryList from './CountryList';
import CountryForm from './CountryForm';
import {fetchAPI} from "../helpers/api";

export default class Application extends PureComponent {


  constructor(props) {
    super(props);
    this.state = {
      initCountries: new List(),
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

  render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                              <CountryForm />
                            </div>
                            <div className="card-body">
                              <CountryList list={this.state.initCountries}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<Application />, document.getElementById('app'));
}
