import React, { useState, useEffect } from 'react';
import {List} from 'immutable';
import {fromJS} from "immutable";

export default function CountryList(props) {


  useEffect(() => {
  }, []);

  return (
    <div>
      <ul className="list-group">
        {
          props.list.map((ele) => {
            return (
              <li
                key={ele.get('alpha3Code')}
                className="list-group-item"
              >
                {ele.get('name')}
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}