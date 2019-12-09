import React from 'react';
// import {fromJS, toLists} from "immutable";

export default function CountryCountAndRegion({count, regions}) {

  return (
    <div className="card">
      <div className="card-body">
        Total # of countries: {count}
        <br />
        Regions include: {regions}
        {/*{regions.toList().map(ele => console.log(ele))}*/}
      </div>
    </div>
  );
}