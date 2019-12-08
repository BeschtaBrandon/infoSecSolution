import React, { useState, useEffect } from 'react';
import {List} from 'immutable';
import {fromJS} from "immutable";

export default function CountryForm() {

  const [countries, setCountries] = useState(new List());
  const token = document.querySelector('meta[name="csrf-token"]').content;

  useEffect(() => {
  }, []);

  return (
    <div>
      <form className="form-inline">
        <div className="form-group mb-3">
          <input type="text" className="form-control" />
        </div>
        <button type="submit" className="btn btn-info mb-3">Search</button>
      </form>
    </div>
  );
}