import React from 'react';

const Stats = () => {
  return (
    <div className="container-fluid margin-t-1">
      <div className="container text-center purple-bg white-color font-s-s9">
        <div className="row">
          <div className="col">
            <p>Comfiremed</p>
          </div>
          <div className="col">
            <p>Recovered</p>
          </div>
          <div className="col">
            <p>Deaths</p>
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
};

export default Stats;
