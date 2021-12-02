import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = ({ countries }) => {
  return (
    <div>
      {countries.map((cn, i) => {
        return (
          <div className="list-item">
            <div key={i}>
              <div>
                <img style={{ height: '100px' }} src={cn.flags.png} alt="pic" />
              </div>
              <Link to={cn.cca3}>
                <p>{cn.name.common}</p>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default CountriesList;
