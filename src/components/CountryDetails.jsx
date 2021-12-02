import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CountryDetails = () => {
  const { alpha3Code } = useParams();
  const [detail, setDetail] = useState();

  useEffect(() => {
    async function getData() {
      let response = await axios.get(
        `https://restcountries.com/v2/alpha/${alpha3Code}`
      );
      const { capital, area, borders, name, flag } = response.data;
      let oneCounrty = {
        name: name,
        capital: capital,
        area: area,
        borders: borders,
        flag: flag,
      };
      setDetail(oneCounrty);
    }
    getData();
  }, [alpha3Code]);

  console.log(detail);

  if (!detail) {
    return <p>Loading . . . </p>;
  }

  return (
    <>
      <img style={{ height: '100px' }} src={detail.flag} alt="details"></img>
      <h1>{detail.name}</h1>
      <hr />
      <table>
        <tbody>
          <tr>
            <td style={{ width: '%30' }}>Capital:</td>
            <td> {detail.capital}</td>
          </tr>
          <hr />
          <tr>
            <td>Area: </td>
            <td>
              {detail.area}
              <sup>2</sup>
            </td>
          </tr>
          <hr />
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {detail.borders.map((e) => {
                  return (
                    <Link to={`/${e}`}>
                      <li>{e}</li>
                    </Link>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default CountryDetails;
