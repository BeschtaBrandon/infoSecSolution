import React, { useEffect } from 'react';
import {fromJS} from "immutable";

export default function CountryForm(props) {

  const token = document.querySelector('meta[name="csrf-token"]').content;


  useEffect(() => {
    console.log("props", props)
    // fetch('countryByName',{
    //   method: 'GET',
    //   mode: 'cors',
    //   headers:{
    //     "Content-Type": "application/json; charset=utf-8",
    //     "X-CSRF-TOKEN": token
    //   },
    // });
  }, []);

  const handleClick = () => {
    fetch(`countryByName/${props.searchText}`,{
      method: 'GET',
      mode: 'cors',
      headers:{
        "Content-Type": "application/json; charset=utf-8",
        "X-CSRF-TOKEN": token
      },
    }).then(res => res.json())
      .then(
        (data) => {
          props.setCountries(fromJS(data));
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          return <p>{error}</p>;
        }
      )
  }

  const handleReset = () => {
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
          props.setCountries(fromJS(data));
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          return <p>{error}</p>;
        }
      )
  }

  return (
    <div>
      <form className="form-inline" >
        <p className="lead">Search by country name:</p>
        {'     '}
        <div className="form-group mb-3">
          <input type="text" className="form-control" name="countryName" value={props.searchText} onChange={e => props.handleTextChange(e)}/>
        </div>
        <button type="button" className="btn btn-info mb-3" onClick={handleClick}>Search</button>
        <button type="button" className="btn btn-danger mb-3" onClick={handleReset}>Clear</button>
      </form>
    </div>
  );
}