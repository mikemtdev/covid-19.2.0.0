import React from 'react';
import './Stats.css';
const Stats = () => (
  <div className="stats purple-bg  margin-t-1">
    <div className=" text-center white-color font-s-s9">
      <div className="row">
        <div className="col">
          <p>
            <strong>Comfiremed</strong>
          </p>
        </div>
        <div className="col">
          <p>
            <strong>Recovered</strong>
          </p>
        </div>
        <div className="col">
          <p>
            <strong>Deaths</strong>
          </p>
        </div>
      </div>
      <div className="font-s-1">
        <div className="row">
          <div className="col">
            <p>123,131</p>
          </div>
          <div className="col">
            <p>13,132</p>
          </div>
          <div className="col">
            <p>1,133</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Stats;
