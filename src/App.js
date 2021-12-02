import Navbar from './components/Navbar';
import CountryDetails from './components/CountryDetails';
import CountriesList from './components/CountriesList';
import { Route, Routes } from 'react-router';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let response = await axios.get('https://restcountries.com/v3.1/all');
      setCountries(response.data);
    };
    getData();
  }, []);

  if (!countries.length) {
    return <div>Loading</div>;
  }

  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <div className="row">
          <div
            className="col-5"
            style={{
              maxHeight: '90vh',
              overflow: 'scroll',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <CountriesList countries={countries} />
          </div>
          <div className="col-7">
            <Routes>
              <Route path="/:alpha3Code" element={<CountryDetails />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
