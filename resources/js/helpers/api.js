import React from 'react';
import {fromJS, List} from 'immutable';

const token = document.querySelector('meta[name="csrf-token"]').content;

export function fetchAPI(url, initState) {
  fetch(url,{
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
        console.log("From javascript: ", fromJS(data))
        return fromJS(data);
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        return <p>{error}</p>;
      }
    )
  ;
}