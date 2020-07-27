import React from 'react';

import './Country.css';
const Country = () => {
  const dummyData = {
    name: 'US',
    total: 1232,
    recovered: 3432,
    deaths: 3542,
  };
  return (
    <div className="container country__container">
      <div className="row ">
        <div className="col">
          <p>{dummyData.name}</p>
        </div>
        <div className="col d-flex align-items-center">
          <p>{dummyData.total}</p>
          <div className="color__total" />
        </div>
        <div className="col d-flex align-items-center">
          <p>{dummyData.recovered}</p>
          <div className="color__recovered" />
        </div>
        <div className="col d-flex align-items-center">
          <p>{dummyData.deaths}</p>
          <div className="color__deaths" />
        </div>
      </div>
    </div>
  );
};

export default Country;
