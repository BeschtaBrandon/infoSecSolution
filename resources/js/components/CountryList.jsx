import React, {useEffect, useState} from 'react';
import { fromJS, List } from "immutable";

export default function CountryList(props) {

  const [countries, setCountries] = useState(new List());

  useEffect(() => {
    setCountries(props.list);
  }, [props.list]);

  return (
    // add className='card-columns'
    <div>
        {
          countries.size > 0 ? countries.map((ele) => {
            return (
              <div className="card" key={ele.get('alpha3Code')}>
                <div className="row">
                <div className="col-md-6">
                  <img className="card-img" src={ele.get('flag')} alt="Country's Flag" />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title">{ele.get('name')}</h5>
                    <div className="card-info">
                      <p>Alpha2code: <span>{ele.get('alpha2Code')}</span></p>
                      <p>Alpha3code: <span>{ele.get('alpha3Code')}</span></p>
                      <ul className="list-unstyled">
                        <li>Region: <span>{ele.get('region')}</span>
                          <ul>
                            <li>Sub region: <span>{ele.get('subregion')}</span></li>
                          </ul>
                        </li>
                      </ul>
                      <ul className="list-group">
                        <li className="list-group-item">Languages</li>
                        { ele.get('languages') ? ele.get('languages').map(language => {
                          return (
                            <li className="list-group-item" key={language.get('iso639_1')}>
                              {language.get('name')}
                            </li>
                          );
                        }) : null }
                      </ul>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            )
          }) : null
        }
    </div>
  );
}